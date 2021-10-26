import React from 'react'
import profileInfo_classes from './profileInfo.module.css'
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    inActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)   //callback
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div className={profileInfo_classes.status}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || "---"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.inActiveEditMode} value={this.state.status} />
                    </div>}
            </div>
        )
    }
}
export default ProfileStatus