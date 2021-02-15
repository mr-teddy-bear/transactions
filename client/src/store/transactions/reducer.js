//import { } from 'store/actionTypes';
import { clock, document, gears, money, valute } from "../../assets";
import { CHANGE_ACTIVE_LINK } from "../actionTypes";

const initialState = {
  links: [
    { id: 1, title: "Счета", imgSrc: document, to: "home" },
    { id: 2, title: "Выписки", imgSrc: clock, to: "history" },
    { id: 3, title: "Зарплата", imgSrc: money, to: "salary" },
    { id: 4, title: "Обмен валют", imgSrc: valute, to: "valute" },
    { id: 5, title: "Настройки", imgSrc: gears, to: "settings" },
  ],
  activeLink: 1,
  user: {
    name: "Соколовский Максим Андреевич",
    position: "Индивидуальный предприниматель",
  },
  accounts: [
    {
      number: "30257895840700000000",
      money: 123,
    },
  ],
  operations: [
    {
      id: 1,
      title: "Post money to",
      type: "min",
      sumOperation: 20,
      date: "2021/02/08 18:31",
    },
    {
      id: 2,
      title: "Get money from",
      type: "plus",
      sumOperation: 15,
      date: "2021/05/02 18:31",
    },
  ],
};

function transactionsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_ACTIVE_LINK:
      return {
        ...state,
        activeLink: payload,
      };
    //   case LOGIN_SUCCESS:
    //     return {
    //       ...state,
    //       user: { username: payload.user },
    //       isAuth: true,
    //       isRequesting: false,
    //     };
    default:
      return state;
  }
}

export default transactionsReducer;
