import * as navigationConst from "../const/navigation.const";

export const resetTabIndex = () => ({
  type: navigationConst.RESET_TAB_INDEX,
  payload: 0
});

export const setTabIndex = index => ({
  type: navigationConst.SET_TAB_INDEX,
  payload: index
});
