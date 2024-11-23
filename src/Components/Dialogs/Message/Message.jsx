import React  from "react";
import module from './../Dialog.module.css'

const Message = (props) => {

    return(
    <div>
        <div className={module.message}>
            {props.message}
        </div>
    </div>
    )
}

export default Message;