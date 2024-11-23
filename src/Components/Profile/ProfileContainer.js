import React from "react";
import Profile from "./Profile";
import { getProfileThunkCreator, getProfileStatusThunk, putNewStatusThunk } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import withRouter from '../../hoc/withRouter';
import { withAuthRedirec } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId; 
        if(!userId){
            userId = 31651
            // userId = this.props.id
            // if(!userId){
            //     <Navigate to={'/login'} />
            // }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getProfileStatusThunk(userId)
    }

    render() {
        return (
            <Profile 
                    {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status}
                    putNewStatusThunk={this.props.putNewStatusThunk}
            />
        );
    }
}

let AuthRedirectComponent = withAuthRedirec(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth
});

let WithRouterDataContainertComponent = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getProfileStatusThunk, putNewStatusThunk }),
    withAuthRedirec
  )(WithRouterDataContainertComponent)