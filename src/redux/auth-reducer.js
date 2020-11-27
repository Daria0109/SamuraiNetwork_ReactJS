import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET-USER-DATA";

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA, payload: {id, email, login}, isAuth
})

// T h u n k   C r e a t o r s
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
      }
    })
  }
}
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
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
export default  authReducer;