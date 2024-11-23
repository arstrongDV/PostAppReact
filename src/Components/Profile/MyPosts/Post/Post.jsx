import React from "react";
import module from './Post.module.css'

let Post = (props) => {
    return (
        <div className={module.item}>
            <img src='https://static.thenounproject.com/png/801408-200.png' />
            {props.message}
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;