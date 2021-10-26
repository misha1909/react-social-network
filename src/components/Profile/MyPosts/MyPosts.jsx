import React, { PureComponent } from 'react'
import MyPosts_classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../../utilits/validators/validators'
import { textArea } from '../../common/formControls/formControls'




// const maxLength = maxLengthCreator(5)
// const NewPost = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <Field
//                 component={textArea}
//                 className={MyPosts_classes.writePost}
//                 placeholder='Write post...'
//                 name={"newPost"}
//                 validate={[requiredField, maxLength]} />
//             <button>Add</button>
//         </form>
//     )
// }
// const WritePostForm = reduxForm({
//     form: 'post'
// })(NewPost)



// class MyPosts extends PureComponent {




//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return nextProps != this.props || nextState != this.state
//     // }
//     render() {


//         console.log('render')
//         const addNewPost = (values) => {
//             this.props.addPost(values.newPost)
//         }
//         let postsElement = this.props.posts.map(post => <Post
//             id={post.id}
//             message={post.message}
//             likesCount={post.likesCount} />)
//         return (
//             <div className={MyPosts_classes.myPosts}>
//                 <div>
//                     <WritePostForm onSubmit={addNewPost} />
//                     <div className={MyPosts_classes.posts}>
//                         {postsElement}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }




let MyPosts = React.memo(props => {
    let postsElement = props.posts.map(post => <Post
        id={post.id}
        message={post.message}
        likesCount={post.likesCount} />)
    const addNewPost = (values) => {
        props.addPost(values.newPost)
    }
    return (
        <div className={MyPosts_classes.myPosts}>
            <div>
                <WritePostForm onSubmit={addNewPost} />
                <div className={MyPosts_classes.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
})
const maxLength = maxLengthCreator(5)
const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={textArea}
                className={MyPosts_classes.writePost}
                placeholder='Write post...'
                name={"newPost"}
                validate={[requiredField, maxLength]} />
            <button>Add</button>
        </form>
    )
}
const WritePostForm = reduxForm({
    form: 'post'
})(NewPost)

export default MyPosts