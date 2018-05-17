import {
  UPDATE_INCOME_AMOUNT, UPDATE_INCOME_METHOD,
  UPDATE_OUTCOME_AMOUNT, UPDATE_OUTCOME_METHOD,
  UPDATE_ACCOUNT_NUM, UPDATE_PHONE, AGREE_WITH_TERMS,
  UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR,
} from '../../constants';
import fetchRate from '../../services/FetchRate';

// INCOME
export const updateIncomeAmount = (newAmount, cross = true) => (dispatch, getState ) => {
  const outcomeAmount = cross ? newAmount * getState().exchangeReducer.rate : getState().exchangeReducer.outcomeAmount;
  dispatch({
    type: UPDATE_INCOME_AMOUNT,
    payload: {
      incomeAmount: newAmount,
      outcomeAmount: outcomeAmount.toFixed(2)
    }
  });
}
export const updateIncomeMethod = (newMethod, newCurrency, newType) => (dispatch, getState ) => {
  dispatch({
    type: UPDATE_INCOME_METHOD,
    payload: {
      method: newMethod,
      currency: newCurrency,
      type: newType
    }
  });
  dispatch( updateRate() )
  .then( () => {
    const newOutcomeAmouunt = getState().exchangeReducer.incomeAmount * getState().exchangeReducer.rate
    dispatch( updateOutcomeAmount( newOutcomeAmouunt, false ))
  });
}

// OUTCOME
export const updateOutcomeAmount = (newAmount, cross = true) => (dispatch, getState ) => {
  const incomeAmount = cross ? newAmount / getState().exchangeReducer.rate : getState().exchangeReducer.incomeAmount;
  dispatch({
    type: UPDATE_OUTCOME_AMOUNT,
    payload: {
      outcomeAmount : newAmount,
      incomeAmount  : incomeAmount.toFixed(2)
    }
  });
}
export const updateOutcomeMethod = (newMethod, newCurrency, newType) => (dispatch, getState ) => {
  dispatch({
    type: UPDATE_OUTCOME_METHOD,
    payload: {
      method: newMethod,
      currency: newCurrency,
      type: newType,
      //incomeAmount: getState().exchangeReducer.outcomeAmount * getState().exchangeReducer.rate
    }
  });
  dispatch( updateRate() )
  .then( () => {
    const newIncomeAmouunt = getState().exchangeReducer.outcomeAmount * getState().exchangeReducer.rate
    dispatch( updateIncomeAmount( newIncomeAmouunt, false ))
  });
}


//TRANSACTION INFO
export const updateAccountNum = newAccountNum  => {
  return {
    type: UPDATE_ACCOUNT_NUM,
    payload: { accountNum: newAccountNum }
  };
}
export const updatePhone = newPhone => {
  return {
    type: UPDATE_PHONE,
    payload: { phone: newPhone }
  };
}
export const agreeWithTerms = () => (dispatch, getState) => {
  dispatch({
    type: AGREE_WITH_TERMS,
    payload: {
      agreeWithTerms: !getState().exchangeReducer.agreeWithTerms
    }
  })
};


//UPDATE RATE
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
      resolve( dispatch({
        type: UPDATE_RATE,
        payload: {
          rate: data,
          rateFatching: false,
          rateFetchingError: false
        }
      }));
    })
    .then(null, data => {
      dispatch({
        type: UPDATE_RATE_FETCHING_ERROR,
        payload: { rateFatching: false, rateFetchingError: true }
      });
    })
  })
};