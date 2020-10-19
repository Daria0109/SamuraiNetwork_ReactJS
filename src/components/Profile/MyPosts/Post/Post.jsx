import React from "react";
import cl from './Post.module.css'

const Post = (props) => {
    return (
        <div className={cl.item}>
            <img src={props.avatar} alt="Avatar"/>
            {props.message}
            <div>
                <span>{props.likesCounter}</span>
            </div>
        </div>
    )
}
export default Post
