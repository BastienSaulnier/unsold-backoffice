import * as navigationConst from "../const/navigation.const.js";

const initState = {
  tabIndex: 0
};

const navigation = (state = initState, action) => {
  switch (action.type) {
    case navigationConst.RESET_TAB_INDEX:
      return { ...state, tabIndex: action.payload };
    case navigationConst.SET_TAB_INDEX:
      return { ...state, tabIndex: action.payload };
    default:
      return state;
  }
};

export default navigation;
