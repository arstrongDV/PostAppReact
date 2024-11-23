import React, {useEffect, useState} from "react";
import style from '../ProfileInfo/Profile.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)
        props.putNewStatusThunk(status)
    }

    const textChange = (e) => {
        setStatus(e.currentTarget.value) 
    }

    return(
            <div>
                <div className={style.descriptionBlock}>
                    {!editMode ? 
                        <div>
                            <h2 onDoubleClick={activatedEditMode}>{props.status === '' ? '----' : props.status}</h2>
                        </div>
                        :
                        <div>
                            <input 
                                value={status} 
                                onChange={textChange}
                                onBlur={deactivatedEditMode} 
                                autoFocus={true}
                            ></input>
                        </div>
                    }
                </div>
            </div>
        )
}


export default ProfileStatusWithHooks;