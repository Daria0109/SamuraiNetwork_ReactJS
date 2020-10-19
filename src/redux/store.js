import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _callSubscriber() {
        console.log("state rendered")
    },
    _state: {
        profilePage: {
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
            newPostText: "Enter text"
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
                {id: 1, name: "Dimych", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 2, name: "Viktor", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 3, name: "Sveta", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 4, name: "Valera", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 5, name: "Sasha", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 6, name: "Ignat", avatar: "https://finance.kz/static/images/default-avatar.png"},
                {id: 7, name: "Valera", avatar: "https://finance.kz/static/images/default-avatar.png"}
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state)
    }
}


export default store;
window.store = store;