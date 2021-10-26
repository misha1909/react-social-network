
import { connect } from 'react-redux'
import { addPostCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { compose } from 'redux'
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
        posts: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostCreator(newPost))
        }
    }
}


export default
    compose(
        connect(mapStateToProps, mapDispatchToProps)
    )(MyPosts)


