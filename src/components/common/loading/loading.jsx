import React from 'react'
import loadingGif from '../../../img/loading.gif'
import loading_classes from './loading.module.css'

let Loading = () => {
    return (
        <div className={loading_classes.loading}><img alt='wait' src={loadingGif} /></div>
    )
}
export default Loading