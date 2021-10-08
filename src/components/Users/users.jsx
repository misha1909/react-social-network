import axios from 'axios'
import React from 'react'

import UsersItem from './UsersItem/usersItem'






















// import axios from 'axios'
// import React from 'react'
// import users_classes from './users.module.css'
// import UsersItem from './UsersItem/usersItem'
// import noPhoto from '../../img/noPhoto.jpg'
// let Users = (props) => {
//     if (props.users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//             props.setUsers(response.data.items)
//         }

//         )
//     }

//     return (

//         props.users.map(u => <div key={u.id} className={users_classes.userItem}>
//             <div className={users_classes.leftBlock}>
//                 <div className={users_classes.avatar}>
//                     <img src={u.photos.small != null ? u.photos.small : noPhoto} alt="" />
//                 </div>
//                 <div className={users_classes.followButton}>
//                     {u.followed
//                         ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                         : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//                 </div>
//             </div>
//             <div className={users_classes.rightBlock}>
//                 <div className={users_classes.usersInfo}>
//                     <div className={users_classes.name}>{u.name}</div>
//                     <div className={users_classes.status}>{u.status}</div>
//                 </div>
//                 <div className={users_classes.location}>
//                     <div>{'u.location.country'}</div>
//                     <div>{'u.location.city'}</div>
//                 </div>
//             </div>
//         </div>)


//     )
// }


// // let usersElement = props.users.map(user =>
// //     <UsersItem
// //         items={allData}

// //         key={user.id}
// //         followed={user.followed}
// //         fullName={user.fullName}
// //         avatar={user.avatar}
// //         status={user.status}
// //         country={user.location.country}
// //         city={user.location.city}
// //         userId={user.id}
// //         follow={props.follow}
// //         unfollow={props.unfollow}
// //     />
// // )
// // return (
// //     <div>
// //         {usersElement}
// //     </div>
// // )

// export default Users