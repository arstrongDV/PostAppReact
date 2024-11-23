import React from "react";
import module from  './Header.module.css'
import { Navigate, NavLink, useNavigate } from "react-router-dom";

let Header = (props) => {
    const navigate = useNavigate();
    let logout = () => {
      props.LogoutThunk()
      navigate('/login')
    }
    return(
      <header className={module.header}>
        <img src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/leaf.png' />
        <div className={module.loginBlock}>
          {!props.isAuth ? 
            <NavLink to={'/login'} >Login</NavLink>
          :
            <div>
              {props.login}
              <button onClick={logout}>Logout</button>
            </div>
          }
        </div>
      </header>
    )
  }
export default Header;