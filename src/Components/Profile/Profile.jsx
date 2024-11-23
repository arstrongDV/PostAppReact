import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {
    return(
        <div>
            <ProfileInfo 
                profile={props.profile} 
                status={props.status} 
                putNewStatusThunk={props.putNewStatusThunk} 
            />
            <MyPostContainer />
        </div>
    )
}

export default Profile;