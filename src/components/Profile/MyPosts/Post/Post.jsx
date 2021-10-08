import post_classes from './Post.module.css'
import './../../../../null.css'
let Post = (props) => {
    return (
        <div className={post_classes.item}>

            <div className={post_classes.avaPost}> <img src="data:image/jpeg;base64,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" /></div>
            <div>
                <div> {props.message}</div>
                <div>
                    <button><span>like {props.likesCount}</span></button>
                </div>
            </div>
        </div>
    )
}

export default Post