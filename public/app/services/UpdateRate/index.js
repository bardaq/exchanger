import { UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR } from '../../constants';
import fetchRate from './fetchRate';

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
      dispatch({
          type: UPDATE_RATE,
          payload: {
            rate: data,
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