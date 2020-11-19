import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friends.module.css'


const Friends = (props) => {
       const friendElement = props.friends.map((friend, i) => {
       return <Friend key={i} name={friend.name} avatar={friend.avatar}/>
    })

    return(
        <div className={classes.friends__section}>
            <h3 className={classes.friends__section_title}>Friends</h3>

            <div className={classes.friends__box}>
                {friendElement}
                            </div>
            <div>

            </div>

        </div>
    )
}
export default Friends

