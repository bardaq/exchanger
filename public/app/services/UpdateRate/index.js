import { UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR } from '../../constants';
import fetchRate from './fetchRate';
import { find } from 'lodash';
import { directions } from '../../config';

export const updateRate = () => (dispatch, getState) => {
  return new Promise(resolve => {
    dispatch({
      type: UPDATE_RATE_FETCHING,
      payload: {
        rateFatching: true,
        rateFetchingError: false
      }
    });
    fetchRate(
      getState().exchangeReducer.incomeCurrency, getState().exchangeReducer.incomeType,
      getState().exchangeReducer.outcomeCurrency, getState().exchangeReducer.outcomeType
    )
    .then(data => {
      const outcomeCurr =  getState().exchangeReducer.outcomeCurrency;
      const comission = find(directions.out, { currency : outcomeCurr }).fee;
      let rate = data - ((comission / 100) * data);
      getState().exchangeReducer.outcomeType === 'coin'
      ? rate = Number(rate).toFixed(6)
      : rate = Number(rate).toFixed(2);

      dispatch({
          type: UPDATE_RATE,
          payload: {
            rate: rate,
            rateFatching: false,
            rateFetchingError: false
          }
      })
      resolve();
    })
    .then(null, data => {
      dispatch({
        type: UPDATE_RATE_FETCHING_ERROR,
        payload: { rateFatching: false, rateFetchingError: true }
      });
    })
  })
};