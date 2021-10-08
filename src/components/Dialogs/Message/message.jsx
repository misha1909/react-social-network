import React from 'react'
import dialogs_classes from "./message.module.css"
import './../../../null.css'

let Message = (props) => {

    return (
        <div className={dialogs_classes.message}>
            <div className={dialogs_classes.messageAva}><img src="https://w7.pngwing.com/pngs/295/985/png-transparent-mr-krabs-patrick-star-squidward-tentacles-spongebob-squarepants-plankton-and-karen-others.png" alt="" /></div>
            {props.message}
        </div>
    )
}
export default Message