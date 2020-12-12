import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED-SUCCESS";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// T h u n k   C r e a t o r s
export const initializeApp = () => {
  return async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
  }
}

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
}
export default appReducer;