import React  from "react";
import module from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsConstrol";


let AddMessageForm = (props) => {
    let maxLength100 = maxLengthCreator(100)
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} validate={[required, maxLength100]} name="message" placeholder="input your message" />
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm)


let Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(el => <DialogItems key={el.id} id={el.id}  name={el.name} />)
    let messagesElement = props.dialogsPage.message.map(el => <Message key={el.id} id={el.id}  message={el.message} />)

    if(props.isAuth === false){
        return <Navigate to="/login"/>
    }

    let onSubmit = (value) => {
        props.AddMessage(value.message)
    }

    return(
        <div className={module.dialogs}>
            <div className={module.dialogItems}>
                { dialogsElement }
            </div>
            <div className={module.messages}>
                { messagesElement }
            <div>
                <AddMessageReduxForm onSubmit={onSubmit} />
            </div>
            </div>
        </div>
    )
}

export default Dialogs;