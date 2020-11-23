const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,
          {
            id: 4,
            message: action.message
          }]
      }
    default:
      return state;
  }
}
export default dialogsReducer;