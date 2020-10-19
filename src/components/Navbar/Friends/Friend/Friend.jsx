import React from "react";
import classes from './Friend.module.css'
import {NavLink} from "react-router-dom";



const Friend = (props) => {
    return (
        <NavLink to={`/profile/${props.name}`}>
            <div className={classes.friend}>
                <img className={classes.avatar} src={props.avatar} alt=""/>
                <p className={classes.name}>{props.name}</p>
            </div>
        </NavLink>
    )
}
export default Friend

