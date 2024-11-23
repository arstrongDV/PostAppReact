import React from "react";
import module from './NavBar.module.css'
import { NavLink } from "react-router-dom";

let NavBar = () => {
    return(
        <nav className={module.nav}>
            <div className={module.item}>
                <NavLink to="/profile" activeClassName={module.activeLink}>Profile</NavLink>
            </div>
            <div className={module.item}>
                <NavLink to="/message" activeClassName={module.activeLink}>Message</NavLink>
            </div>
            <br/>
            <div className={module.item}>
                <NavLink to="/users" activeClassName={module.activeLink}>Users</NavLink>
            </div>
            <br/>
            <div className={module.item}>
                <NavLink to="/news" activeClassName={module.activeLink}>News</NavLink>
            </div>
            <div className={module.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;