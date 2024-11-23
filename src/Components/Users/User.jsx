import React from "react";
import style from './style/style.module.css'
import icon from '../../assets/images/defult_icon.jpg'
import { NavLink } from "react-router-dom";

let User = (props) => {
    const { el } = props;
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + el.id}>
                        <img className={style.icon} src={el.photos.small === null ? 
                            icon
                            : 
                            el.photos.small 
                            } /> 
                    </NavLink>
                </div>
                <div>
                    { 
                    el.followed ? 
                    <button disabled={props.followingInProgres.some(id => id === el.id)} onClick={() => {
                        props.UnfollowThunkCreator(el.id)
                    }}>FOLLOW</button>
                    :
                    <button disabled={props.followingInProgres.some(id => id === el.id)} onClick={() => {
                        props.FollowThunkCreator(el.id)
                    }}>UNFOLLOW</button>
                    }
                </div>
            </span>
            <span>
                <h3>{el.name}</h3>
                <p>{el.status}</p>
            </span>
            <br/>
        </div>
        )
}

export default User;
