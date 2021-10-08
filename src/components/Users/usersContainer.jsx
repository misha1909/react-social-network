import React from 'react'
import { connect } from "react-redux"
import { unfollow, follow, setCurrentPage, setFollowLoading, getUsers } from "../../redux/usersReducer"
import UsersItem from './UsersItem/usersItem'
import Loading from './../common/loading/loading'
class Users extends React.Component {
    // constructor(props) {
    //     super(props)

    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isLoading ? <Loading /> : null}
            <UsersItem
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
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followLoading: state.usersPage.followLoading
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowLoading,
    getUsers //thunk creator
})(Users)