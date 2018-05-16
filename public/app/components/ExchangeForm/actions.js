import {
  UPDATE_INCOME_AMOUNT, UPDATE_INCOME_METHOD,
  UPDATE_OUTCOME_AMOUNT, UPDATE_OUTCOME_METHOD,
  UPDATE_ACCOUNT_NUM, UPDATE_PHONE, AGREE_WITH_TERMS,
  UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR,
} from '../../constants';
import getRate from '../../services/GetRate';

// INCOME
export const updateIncomeAmount = newAmount => (dispatch, getState ) => {
  dispatch({
    type: UPDATE_INCOME_AMOUNT,
    payload: {
      incomeAmount: newAmount,
      //directionAmount: newAmount * getState().exchangeReducer.rate
      outcomeAmount: newAmount
    }
  });
}
export const updateIncomeMethod = (newMethod, newCurrency, newType) => {
  return {
    type: UPDATE_INCOME_METHOD,
    payload: {
      method: newMethod,
      currency: newCurrency,
      type: newType
    }
  }
}

// OUTCOME
export const updateOutcomeAmount = newAmount => (dispatch, getState ) => {
  dispatch({
    type: UPDATE_OUTCOME_AMOUNT,
    payload: {
      outcomeAmount: newAmount,
      //directionAmount: newAmount * getState().exchangeReducer.rate
      //incomeAmount: newAmount
    }
  });
}
export const updateOutcomeMethod = (newMethod, newCurrency, newType) => {
  return {
    type: UPDATE_OUTCOME_METHOD,
    payload: {
      method: newMethod,
      currency: newCurrency,
      type: newType
    }
  }
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
  dispatch({
    type: UPDATE_RATE_FETCHING,
    payload: {
      rateFatching: true,
      rateFetchingError: false
    }
  });
  getRate(
    getState().exchangeReducer.incomeCurrency, getState().exchangeReducer.incomeType,
    getState().exchangeReducer.outcomeCurrency, getState().exchangeReducer.outcomeType
  )
  .then(data => {
    dispatch({ type: UPDATE_RATE, payload: { rate: data, rateFatching: false, rateFetchingError: false } });
  })
  .then(null, data => {
    dispatch({
      type: UPDATE_RATE_FETCHING_ERROR,
      payload: { rateFatching: false, rateFetchingError: true }
    });
  })
};