import React from "react";
import module from './MyPost.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsConstrol";

let maxLength30 =  maxLengthCreator(20);

let PostForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field 
                    component={Textarea} 
                    name='post' 
                    placeholder="input your post text" 
                    validate={[required, maxLength30]} />
                <button>Post</button>
            </form>
        </div>
    )
}

let PostReduxForm = reduxForm({
    form: 'addPost'
})(PostForm)

let MyPost = React.memo(props => {
    console.log("RENDER")
    let postsElement = [...props.post].reverse().map(el => <Post key={el.id} id={el.id} 
        message={el.message} 
        likesCount={el.likesCount} />)

    let addPost = (value) => {
        props.addPost(value.post)
    }
        
    return(
        <div className={module.mainBlock}>
            <div>
                <PostReduxForm onSubmit={addPost} />
            </div>
            <br/>
            Posts
            <div className={module.posts}>
                { postsElement }
            </div>
        </div>
    )
});

export default MyPost;