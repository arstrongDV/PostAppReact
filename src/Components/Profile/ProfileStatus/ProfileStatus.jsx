import React from "react";
import style from '../ProfileInfo/Profile.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    isStatusChange = () => {
        this.setState({
            editMode: true
        })
    }

    isChangeEnd = () => {
        this.setState({
            editMode: false
        })
        this.props.putNewStatusThunk(this.state.status)
    }

    textChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        }) 
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return(
                <div>
                    <div className={style.descriptionBlock}>
                        {!this.state.editMode ? 
                            <h2 onDoubleClick={this.isStatusChange}>{this.props.status === '' ? '----' : this.props.status}</h2>
                            :
                            <input 
                                value={this.state.status} 
                                autoFocus={true} 
                                onBlur={this.isChangeEnd} 
                                onChange={this.textChange}>
                            </input>
                        }
                    </div>
                </div>
            )
    }
}


export default ProfileStatus;