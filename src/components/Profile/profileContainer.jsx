import React from 'react'
import Profile from "./profile"
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
export default

    compose(
        connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
        withRouter,
        withAuthRedirect
    )(ProfileContainer)


