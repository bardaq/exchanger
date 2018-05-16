import * as _ from 'lodash';
import { RUB, UAH, USD } from '../../config';

export default function getRate( incomeCurr, incomeCurrType, outcomeCurr, outcomeCurrType){
  let rate = '0';
  let ratePromise = new Promise( (resolve, reject) => {

    /////////////////////////////
    //
    // FIAT => FIAT
    //
    /////////////////////////////
    if (incomeCurrType === 'fiat' && outcomeCurrType === 'fiat'){
      fetch('http://www.apilayer.net/api/live?access_key=050ddb2414effd04a07cd6147eacc4a1&format=1')
      .then(data => data.json())
      .then(data => {
        const usdToIncome = _.find(data.quotes, (item, index) => { return index === 'USD'+incomeCurr })
        const usdToOutcome = _.find(data.quotes, (item, index) => { return index === 'USD'+outcomeCurr })
        rate = (1/usdToIncome) * usdToOutcome;

      })
      .then(data => { resolve(rate.toFixed(2)) })
    } else {
      /////////////////////////////
      //
      // COIN/FIAT => COIN/FIAT
      //
      /////////////////////////////

      // geting coin id from listing
      fetch('https://api.coinmarketcap.com/v2/listings/')
      .then(data => data.json())
      .then(data => {
        const id = _.find(data.data, item => { return item.symbol ===  ( outcomeCurrType === 'coin' ? outcomeCurr : incomeCurr ) }).id;

        // geting coin rate
        fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=${outcomeCurrType === 'coin' ? incomeCurr : outcomeCurr}`)
        .then(data => data.json())
        .then(data => {
          outcomeCurrType === 'coin'
          ? rate = 1/data.data.quotes[incomeCurr].price
          : rate = data.data.quotes[outcomeCurr].price
        })
        .then(data => { resolve(rate.toFixed(2)) })
        .then(null, error => { reject(error)})
      });
    }
  })

  return ratePromise;
}

// Privat API
// https://privat24.privatbank.ua/p24/accountorder?oper=prp&PUREXML&apicour&country=ua&full
// Another 3rd-rarty API
// http://www.apilayer.net/api/live?access_key=050ddb2414effd04a07cd6147eacc4a1&format=1
