import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { LoginThunk } from "../../redux/auth-reducer";
import { CreateField, Input } from "../common/FormsControls/FormsConstrol";
import { required } from "../../utils/validators";
import { Navigate, useNavigate } from "react-router-dom";
import style from './style/style.module.css';

let LoginForm = ({handleSubmit, error}) => {
    return(
        <div>
            {!error ? '' :
                <div className={style.form_summery_rror}>
                    {error}
                </div>
            }
            <form onSubmit={handleSubmit}>
                {CreateField(Input, required, "email", "email")}
                {CreateField(Input, required, "password", "password", "password")}
                {CreateField(Input, [], "rememberMe", "", "checkbox", 'remember me')} 
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = ({LoginThunk, isAuth}) => {
    let onSubmit = (FormData) => {
        LoginThunk(FormData.email, FormData.password, FormData.rememberMe);
    };
    const navigate = useNavigate();
    if(isAuth) {
        navigate('/profile')
    }

    return(
        <div>
            <h1>Login!!!</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { LoginThunk })(Login) 