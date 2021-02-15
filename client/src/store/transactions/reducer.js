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
