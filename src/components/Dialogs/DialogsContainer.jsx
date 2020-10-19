import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (updatedText) => {
            dispatch(updateMessageActionCreator(updatedText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
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




