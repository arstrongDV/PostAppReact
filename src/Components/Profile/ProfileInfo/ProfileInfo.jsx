import React from "react";
import module from  './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import icone from './../../../assets/images/defult_icon.jpg'
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import { useNavigate } from "react-router-dom";

let ProfileInfo = (props) => {
    const navigate = useNavigate();
    let GoBack = () => {
        navigate('/users')
    }

    if(!props.profile){
        return <Preloader />
    }

    return(
        <div>
            <div>
                <img src='https://thumbs.dreamstime.com/b/ladybugs-на-оранжевом-цветке-весны-полет-насекомого-художническое-125140826.jpg' />
            </div>
           <br />
           <button onClick={GoBack} >Back</button>
           <br />
            <div className={module.descriptionBlock}>
                { props.profile.photos.large !== null ? 
                <img src={props.profile.photos.large} />
                :
                <img src={icone} />
                }
                <br/>
                <h1>{props.profile.fullName}</h1>
                <h3>{props.profile.aboutMe}</h3>
                <div>
                    <ProfileStatusWithHooks status={props.status} putNewStatusThunk={props.putNewStatusThunk} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;