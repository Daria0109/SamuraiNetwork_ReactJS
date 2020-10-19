import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePost: (updatedText) => {
            dispatch(updatePostActionCreator(updatedText))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;



// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState();
//
//                 const addPost = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action);
//                 }
//                 const updatePost = (updatedText) => {
//                     let action = updatePostActionCreator(updatedText);
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updatePost={updatePost}
//                                 addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>
//             } }
//         </StoreContext.Consumer>
//     )
// };
// export default MyPostsContainer;
