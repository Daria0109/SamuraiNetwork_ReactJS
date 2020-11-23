import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  const postsElements = props.posts.posts.map((p, i) => <Post key={i} message={p.message}
                                                              likesCounter={p.likesCounter}
                                                              avatar={p.avatar} id={p.id}/>)
  const addPost = (value) => {
    props.addPost(value.postText);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <PostForm onSubmit={addPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};
export default MyPosts

const PostForm = reduxForm({form: 'post'})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea'  name='postText'/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
})