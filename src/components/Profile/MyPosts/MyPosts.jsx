import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.posts.map(p => <Post message={p.message}
                                                           likesCounter={p.likesCounter}
                                                           avatar={p.avatar} id={p.id}/>)
    const onAddPost = () => {
        props.addPost();
    }
    const onUpdatePost = (e) => {
        props.updatePost(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.posts.newPostText}
                              onChange={onUpdatePost}></textarea>
                </div>
                <button onClick={onAddPost}>Add Post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts
