import React from 'react'
import MyPosts_classes from './MyPosts.module.css'
import Post from './Post/Post'


let MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)
    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPost(text)
    }
    return (
        <div className={MyPosts_classes.myPosts}>
            <div><h2>my posts</h2>
                <div>
                    <h2>Add new post</h2>
                    <textarea placeholder='Enter post...' onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="3" value={props.newPostText} />
                    <button onClick={onAddPost}>Add</button>
                </div>
                <div className={MyPosts_classes.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}


export default MyPosts