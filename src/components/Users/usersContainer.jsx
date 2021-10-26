import React from 'react'
import { connect } from "react-redux"
import { unfollow, follow, setCurrentPage, setFollowLoading, getUsers } from "../../redux/usersReducer"
import UsersItem from './UsersItem/usersItem'
import Loading from './../common/loading/loading'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getTotalUsersCount, getCurrentPage, getPageSize, getIsLoading, getFollowLoading, getAllUsersSelectorSuper } from '../../redux/usersSelectors'
import Users from './users'
class UsersContainer extends React.Component {

    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isLoading ? <Loading /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followLoading={this.props.followLoading}
            />
        </>


    }
}
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followLoading: state.usersPage.followLoading
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getAllUsersSelectorSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followLoading: getFollowLoading(state)
    }
}


export default

    compose(
        connect(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            setFollowLoading,
            getUsers //thunk creator
        }),
        withAuthRedirect
    )(UsersContainer)

