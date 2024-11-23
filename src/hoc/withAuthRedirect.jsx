import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsWithRedirect = (state) => ({
    isAuth: state.auth.isAuth 
});

export let withAuthRedirec = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if(this.props.isAuth === false){
                return <Navigate to="/login"/>
            }
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}