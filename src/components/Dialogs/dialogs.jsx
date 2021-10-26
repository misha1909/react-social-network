import React from 'react'
import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import dialogs_classes from "./dialogs.module.css"
import Message from './Message/message'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from './../../utilits/validators/validators'
import { textArea } from '../common/formControls/formControls'


let Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = state.messagesData.map(message => <Message message={message.message} id={message.id} />)


    const addNewMessage = (values) => {
        props.addMessage(values.newMessage)
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
                <NewMessageForm onSubmit={addNewMessage} />
            </div>


        </div>
    )
}
const maxLength = maxLengthCreator(5)
const NewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >

            <Field
                className={dialogs_classes.writeMessage}
                component={textArea}
                placeholder='Enter message...'
                name="newMessage"
                validate={[requiredField, maxLength]} />
            <button >Send</button>
        </form>
    )
}
const NewMessageForm = reduxForm({
    form: 'message'
})
    (NewMessage)
export default Dialogs