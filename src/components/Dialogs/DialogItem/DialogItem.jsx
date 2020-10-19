import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <div className={classes.dialogItem}>
                    <img className={classes.avatar} src={props.avatar} alt="Avatar"/>
                    <div className={classes.name}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )
}


export default DialogItem;