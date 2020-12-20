import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET-USER-PROFILE";
const SET_STATUS = "samurai-network/profile/GET-STATUS";
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE_PHOTO_SUCCESS'

export const addPostActionCreator = (post) => ({type: ADD_POST, post})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}
export const savePhoto = (photo) => {
  return async (dispatch) => {
    const data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos))
    }
  }
}
export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      const myId = getState().auth.id;
      dispatch(getUserProfile(myId))
    } else {
      const errorText = data.messages[0].slice(0, 18);
      const fieldWithError = data.messages[0].slice(30, -1).toLowerCase();
      dispatch(stopSubmit("edit-profile",
        {
          'contacts': {[fieldWithError]: errorText},
        }))
      return Promise.reject(data.messages[0])
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }
    default:
      return state;
  }
}
export default profileReducer;