
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './dialogs'
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {

    return {

        addMessage: (newMessage) => {
            dispatch(addMessageCreator(newMessage))
        }
    }
}

export default

    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)


