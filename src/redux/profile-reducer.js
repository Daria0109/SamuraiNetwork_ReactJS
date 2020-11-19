import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "GET-STATUS"

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (updatedText) =>  ({
    type: UPDATE_POST,
    updatedPost: updatedText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

// T h u n k  C r e a t o r
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
            dispatch(setStatus(status))
            }
        })
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
    newPostText: "",
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts:
                    [
                        ...state.posts,
                        {id: new Date().getTime(),
                            message: state.newPostText,
                            likesCounter: 0,
                            avatar: "https://finance.kz/static/images/default-avatar.png"}
                    ]
            }
        case UPDATE_POST: {
           return  {
               ...state,
               newPostText: action.updatedPost
           }
        };
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