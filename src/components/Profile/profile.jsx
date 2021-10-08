import MyPostsContainer from "./MyPosts/MyPostsContainer"
import profile_classes from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/profileInfo"
let Profile = (props) => {
    return (
        <div className={profile_classes.content}>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile