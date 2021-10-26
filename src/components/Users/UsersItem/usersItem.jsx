import users_classes from './usersItem.module.css'
import './../../../null.css'
import noPhoto from '../../../img/noPhoto.jpg'
import { NavLink } from 'react-router-dom'
let UsersItem = ({ user, followLoading, unfollow, follow, ...props }) => {


    return (
        <div>

            <div className={users_classes.userItem}>
                <div className={users_classes.leftBlock}>
                    <div className={users_classes.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : noPhoto} alt="" />
                        </NavLink>
                    </div>
                    <div className={users_classes.followButton}>
                        {user.followed
                            ? <button
                                disabled={followLoading.some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>
                                Unfollow
                                        </button>
                            : <button
                                disabled={followLoading.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>
                                Follow
                                    </button>}
                    </div>
                </div>
                <div className={users_classes.rightBlock}>
                    <div className={users_classes.usersInfo}>
                        <div className={users_classes.name}>{user.name}</div>
                        <div className={users_classes.status}>{user.status}</div>
                    </div>
                    <div className={users_classes.location}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsersItem