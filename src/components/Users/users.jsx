import Paginator from './../common/paginator/paginator'
import UsersItem from './UsersItem/usersItem'
let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, followLoading, follow, unfollow, users, ...props }) => {


    return (
        <div>
            {users.map(u => <UsersItem
                user={u}
                followLoading={followLoading}
                unfollow={unfollow}
                follow={follow}
                key={u.id} />)}
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalItemsCount={totalUsersCount} />

        </div>
    )
}
export default Users