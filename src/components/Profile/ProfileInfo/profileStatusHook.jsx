import React, { useEffect, useState } from 'react'
import profileInfo_classes from './profileInfo.module.css'
const ProfileStatusHook = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activeEditMode = () => {
        setEditMode(true)
    }
    const inActiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={profileInfo_classes.status}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>Status: {props.status || "---"}</span>
                </div>}
            {editMode &&
                <div>
                    <span>Status: </span>
                    <input onChange={onStatusChange}
                        onBlur={inActiveEditMode}
                        autoFocus={true}
                        value={status} />
                </div>}
        </div>
    )

}
export default ProfileStatusHook