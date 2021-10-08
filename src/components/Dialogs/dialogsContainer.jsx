
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessage, updateNewMessageText } from '../../redux/dialogsReducer'
import Dialogs from './dialogs'
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageText
})(AuthRedirectComponent)
export default DialogsContainer