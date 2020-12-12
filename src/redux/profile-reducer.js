import {profileAPI} from "../api/api";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET-USER-PROFILE";
const SET_STATUS = "samurai-network/profile/GET-STATUS"

export const addPostActionCreator = (post) => ({type: ADD_POST, post})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

// T h u n k  C r e a t o r
export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response))
  }
}
export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response))
  }
}
export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}


let initialState = {
  posts: [
    {
      id: 1,
      message: "Hey, how are you?",
      likesCounter: 10,
      avatar: "https://i.pinimg.com/originals/32/3b/c2/323bc2e28f35a760b8d7afe48f3ffe48.png"
    },
    {
      id: 2,
      message: "This is my first post.",
      likesCounter: 8,
      avatar: "https://i.pinimg.com/originals/39/e0/32/39e032d9bf8b9640980d6eff1ab79e2d.png"
    }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts:
          [
            ...state.posts,
            {
              id: new Date().getTime(),
              message: action.post,
              likesCounter: 0,
              avatar: "https://finance.kz/static/images/default-avatar.png"
            }
          ]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: state.profile = action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
}
export default profileReducer;