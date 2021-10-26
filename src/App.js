import './null.css'
import React from 'react';
import store from './redux/reduxStore';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeaderContainer from './components/Header/headerContainer.jsx';
import { Route, withRouter } from 'react-router';
// import Login from './components/Login/login';
import { Component } from 'react';
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loading from './components/common/loading/loading';
// import DialogsContainer from './components/Dialogs/dialogsContainer';
// import ProfileContainer from './components/Profile/profileContainer';
import NavContainer from './components/Nav/navContainer';
// import UsersContainer from './components/Users/usersContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/usersContainer'))
const Login = React.lazy(() => import('./components/Login/login'))





class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return (<Loading />)
    }

    return (
      <div className="test">
        <div className="app-wrapper">
          <HeaderContainer />
          <NavContainer />
          <div className='app-wrapper-content'>
            <React.Suspense fallback={<Loading />}>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
            </React.Suspense>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
let MainApp = () => {
  return (<BrowserRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>)
}

export default MainApp
