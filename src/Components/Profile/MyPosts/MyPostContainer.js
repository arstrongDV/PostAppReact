import React from "react";
import { connect } from 'react-redux';
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => ({
  newPostText: state.profilePage.newPostText,
  post: state.profilePage.post
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => {
    dispatch(addPostActionCreator(post));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
