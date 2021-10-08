import React from 'react'
import { NavLink } from 'react-router-dom'
import dialogs_classes from "./dialogItem.module.css"
let DialogItem = (props) => {
    let path = ("/dialogs/" + props.id)
    return (
        <div className={dialogs_classes.dialog} >
            <NavLink to={path} activeClassName={dialogs_classes.active}>{props.name}</NavLink>
        </div >
    )
}



export default DialogItem