import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "samurai-network/auth/SET-USER-DATA";
const GET_CAPTCHA_SUCCESS = "samurai-network/auth/GET_CAPTCHA_SUCCESS"

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA, payload: {id, email, login}, isAuth
})
export const getCaptchaSuccess = (captchaUrl) => (
  {type: GET_CAPTCHA_SUCCESS, captchaUrl
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
export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptcha())
      }
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
export const getCaptcha = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    console.log(response)
    debugger
    const captchaUrl = response.url
    dispatch(getCaptchaSuccess(captchaUrl))
  }
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth
      };
    case GET_CAPTCHA_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state;
  }
}
export default authReducer;