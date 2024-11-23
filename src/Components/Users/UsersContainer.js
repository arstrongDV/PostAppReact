import { connect } from "react-redux";
import { 
    IsFatching, 
    isFollowing, 
    getUsersThunkCreator,
    UnfollowThunkCreator,
    FollowThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { getPortionSize, getCurrentPage, getFollowingProgres, getIsFatching, getPageSize, getSelectedPage, getToutalUsersCount, getUsers, getUsersSuper } from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return(
            <>
                {
                    this.props.isFatching ? <Preloader /> : null
                }
                <Users 
                    portionSize={this.props.portionSize}
                    totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    onPageChange={this.onPageChange} 
                    users={this.props.users}   
                    isFollowing={this.props.isFollowing}
                    followingInProgres={this.props.followingInProgres}
                    UnfollowThunkCreator={this.props.UnfollowThunkCreator}
                    FollowThunkCreator={this.props.FollowThunkCreator}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => ({
    // users: getUsers(state),
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getToutalUsersCount(state),
    selectedPage: getSelectedPage(state),
    currentPage: getCurrentPage(state),
    isFatching: getIsFatching(state),
    followingInProgres: getFollowingProgres(state),
    portionSize: getPortionSize(state)
})

// let mapDispatchToProps = (dispatch) => ({
//     follow: (userId) =>{
//         dispatch(FollowActionCreator(userId))
//     },
//     unfollow: (userId) =>{
//         dispatch(UnFollowActionCreator(userId))
//     },
//     setUsers: (users) => {
//         dispatch(SetUsers(users))
//     },
//     selectPage: (pageNum) => {
//         dispatch(PageSelected(pageNum))
//     },
//     setTotalCount: (totalCount) => {
//         dispatch(SetTotalUsersCount(totalCount))
//     },
//     IsFatching: (isfatching) => {
//         dispatch(SetIsFatching(isfatching))
//     }
// })

export default connect(mapStateToProps, {
    IsFatching,
    isFollowing,
    getUsers: getUsersThunkCreator,
    UnfollowThunkCreator,
    FollowThunkCreator
})(UsersAPIComponent)