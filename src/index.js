import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import MainApp from './App'
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




// let rerenderEntireTree = () => {
ReactDOM.render(

    <MainApp />,

    document.getElementById('root')
);
// }

// rerenderEntireTree()

// store.subscribe(() => {
//     rerenderEntireTree()
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();