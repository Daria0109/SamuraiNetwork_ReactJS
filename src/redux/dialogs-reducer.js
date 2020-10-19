const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (message) => (
    {type: UPDATE_MESSAGE, updatedText: message})

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 2, name: "Viktor", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 3, name: "Sveta", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 4, name: "Valera", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 5, name: "Sasha", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 6, name: "Ignat", avatar: "https://finance.kz/static/images/default-avatar.png"},
        {id: 7, name: "Valera", avatar: "https://finance.kz/static/images/default-avatar.png"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello!"},
        {id: 3, message: "How are you?"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages,
                    {id: 4,
                        message: state.newMessageText}]
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.updatedText,
            };
        default:
            return state;
    }
}
export default dialogsReducer;