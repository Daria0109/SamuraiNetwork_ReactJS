const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (updatedText) =>  ({
    type: UPDATE_POST,
    updatedPost: updatedText})

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
    newPostText: ""
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
           };
        }
        default:
            return state;
    }
}
export default profileReducer;