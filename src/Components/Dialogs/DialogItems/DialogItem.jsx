import React  from "react";
import module from './../Dialog.module.css'
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialog/' + props.id
    return(
        <div>
            <div className={module.mainIcn}>
                <img className={module.icon} src='https://static.thenounproject.com/png/801408-200.png' />
            </div>
            <div className={module.dialog + ' ' + module.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}



export default DialogItems;