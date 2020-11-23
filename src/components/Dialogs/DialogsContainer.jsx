import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Dialogs);

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




