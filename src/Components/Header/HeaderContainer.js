import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { LogoutThunk } from "../../redux/auth-reducer";

class HeaderComponent extends React.Component{
    render(){
        return(
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LogoutThunk})(HeaderComponent)