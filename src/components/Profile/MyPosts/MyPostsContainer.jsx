
import { connect } from 'react-redux'
import { addPost, updateNewPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
// let MyPostsContainer = (props) => {
//     let state = props.store.getState()
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }
//     return (
//         <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
//     )
// }
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        updateNewPost,
        addPost
    })(MyPosts)
export default MyPostsContainer