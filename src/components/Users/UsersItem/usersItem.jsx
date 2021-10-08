import users_classes from './usersItem.module.css'
import './../../../null.css'
import noPhoto from '../../../img/noPhoto.jpg'
import { NavLink } from 'react-router-dom'
let UsersItem = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={users_classes.userItem}>
                        <div className={users_classes.leftBlock}>
                            <div className={users_classes.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : noPhoto} alt="" />
                                </NavLink>
                            </div>
                            <div className={users_classes.followButton}>
                                {u.followed
                                    ? <button
                                        disabled={props.followLoading.some(id => id === u.id)}
                                        onClick={() => { props.unfollow(u.id) }}>
                                        Unfollow
                                        </button>
                                    : <button
                                        disabled={props.followLoading.some(id => id === u.id)}
                                        onClick={() => { props.follow(u.id) }}>
                                        Follow
                                    </button>}
                            </div>
                        </div>
                        <div className={users_classes.rightBlock}>
                            <div className={users_classes.usersInfo}>
                                <div className={users_classes.name}>{u.name}</div>
                                <div className={users_classes.status}>{u.status}</div>
                            </div>
                            <div className={users_classes.location}>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>

                    </div>

                )
            }
            <div className={users_classes.pageNumber}>
                {pages.map(p => {
                    // return <span
                    //     className={props.currentPage === p && users_classes.activePage} onClick={() => { props.onPageChanged(p) }} >{p}</span>
                    return <div className={users_classes.item}><NavLink to={pages}
                        activeClassName={users_classes.active} onClick={() => { props.onPageChanged(p) }} >{p}</NavLink></div>
                })}
            </div>
        </div>
    )
}
export default UsersItem