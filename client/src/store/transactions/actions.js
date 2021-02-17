import axios from "axios";
import {
  CHANGE_ACTIVE_LINK,
  GET_MONEY_FAILURE,
  GET_MONEY_REQUEST,
  GET_MONEY_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_FAILURE,
} from "../actionTypes";

export function changeActiveLink(id) {
  return {
    type: CHANGE_ACTIVE_LINK,
    payload: id,
  };
}
export function getMoneyRequest() {
  return {
    type: GET_MONEY_REQUEST,
  };
}
export function getMoneySuccess(currentMoney) {
  return {
    type: GET_MONEY_SUCCESS,
    payload: currentMoney,
  };
}
export function getMoneyFailure(error) {
  return {
    type: GET_MONEY_FAILURE,
    payload: error,
  };
}

export function getTransactionsRequest() {
  return {
    type: GET_TRANSACTIONS_REQUEST,
  };
}
export function getTransactionsSuccess(allTransactions) {
  return {
    type: GET_TRANSACTIONS_SUCCESS,
    payload: allTransactions,
  };
}
export function getTransactionsFailure(error) {
  return {
    type: GET_TRANSACTIONS_FAILURE,
    payload: error,
  };
}

export const getMoney = () => async (dispatch) => {
  dispatch(getMoneyRequest());
  try {
    const response = await axios.get(
      "http://localhost:3001/transactions/balance"
    );
    const { currentMoney } = response.data;
    dispatch(getMoneySuccess(currentMoney));
  } catch (e) {
    dispatch(getMoneyFailure(e.message));
  }
};

export const getTransactions = () => async (dispatch) => {
  dispatch(getTransactionsRequest());
  try {
    const response = await axios.get("http://localhost:3001/transactions/");
    const { allTransactions } = response.data;
    dispatch(getTransactionsSuccess(allTransactions));
  } catch (e) {
    dispatch(getTransactionsFailure(e.message));
  }
};
