import React from "react";
import style from './style/style.module.css'
import icon from '../../assets/images/defult_icon.jpg'
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginators/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            <div>
                <Paginator {...props} />
            </div>
            {
                props.users.map((el) => <User {...props} el={el} />)
            }
        </div>
        )
}

export default Users;
