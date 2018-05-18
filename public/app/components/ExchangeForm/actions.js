import {
  UPDATE_INCOME_AMOUNT, UPDATE_INCOME_METHOD,
  UPDATE_OUTCOME_AMOUNT, UPDATE_OUTCOME_METHOD,
  UPDATE_ACCOUNT_NUM, UPDATE_PHONE, AGREE_WITH_TERMS,
} from '../../constants';
import { updateRate } from '../../services/UpdateRate';

// INCOME
export const updateIncomeAmount = (newAmount, cross = true) => (dispatch, getState ) => {
  const outcomeAmount = cross ? newAmount * getState().rateReducer.rate : getState().exchangeReducer.outcomeAmount;
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
    const newOutcomeAmouunt = getState().exchangeReducer.incomeAmount * getState().rateReducer.rate
    dispatch( updateOutcomeAmount( newOutcomeAmouunt, false ))
  });
}

// OUTCOME
export const updateOutcomeAmount = (newAmount, cross = true) => (dispatch, getState ) => {
  const incomeAmount = cross ? newAmount / getState().rateReducer.rate : getState().exchangeReducer.incomeAmount;
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
      type: newType
    }
  });
  dispatch( updateRate() )
  .then( () => {
    const newIncomeAmouunt = getState().exchangeReducer.outcomeAmount * getState().rateReducer.rate
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