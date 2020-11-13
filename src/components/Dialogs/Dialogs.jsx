import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const sendMessage = () => {
        props.addMessage()
    }
    const onMessageUpdate = (e) => {
        let message = e.currentTarget.value;
        props.updateMessage(message)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

                <div>
                        <textarea value={props.dialogsPage.newMessageText}
                                  onChange={onMessageUpdate}></textarea>
                </div>

                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;