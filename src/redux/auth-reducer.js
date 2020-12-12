import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "samurai-network/auth/SET-USER-DATA";

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA, payload: {id, email, login}, isAuth
})

// T h u n k   C r e a t o r s
export const getAuthUserData = () => {
  return async (dispatch) => {
    const response = await authAPI.getAuth();
    if (response.resultCode === 0) {
      let {id, login, email} = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  }
}
export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}))
    }
  }
}
export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  }
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth
      };
    default:
      return state;
  }
}
export default authReducer;