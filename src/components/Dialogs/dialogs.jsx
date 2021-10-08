import React from 'react'
import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import dialogs_classes from "./dialogs.module.css"
import Message from './Message/message'


let Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = state.messagesData.map(message => <Message message={message.message} id={message.id} />)
    let newMessageElement = React.createRef()
    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }
    if (!props.isAuth) {
        return (
            <Redirect to='/login' />
        )
    }
    return (
        <div className={dialogs_classes.dialogs}>
            <div className={dialogs_classes.title}>Dialogs</div>
            <div className={dialogs_classes.dialogItems}>{
                dialogsElements
            }
            </div>
            <div className={dialogs_classes.messages}>
                {messageElements}
                <textarea placeholder='Enter message...' onChange={onMessageChange} ref={newMessageElement} name="" id="" cols="30" rows="1" value={props.newMessageText} /><button onClick={onAddMessage} >Send</button>
            </div>
        </div>
    )
}
export default Dialogs