import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, updateMessage} from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(Dialogs);
export default DialogsContainer;


//
// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 const sendMessage = () => {
//                     let action = addMessageActionCreator()
//                     store.dispatch(action);
//                 }
//
//                 const updateMessage = (updatedText) => {
//                     let action = updateMessageActionCreator(updatedText);
//                     store.dispatch(action)
//                 }
//
//                 return <Dialogs updateMessage={updateMessage}
//                                 sendMessage={sendMessage}
//                                 dialogs={state.dialogsPage.dialogs}
//                                 messages={state.dialogsPage.messages}
//                                 newMessageText={state.dialogsPage.newMessageText}/>
//             }}
//         </StoreContext.Consumer>)
// }
// export default DialogsContainer;




