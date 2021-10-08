import './null.css'
import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/headerContainer.jsx';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import NavContainer from './components/Nav/navContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/profileContainer';
import Login from './components/Login/login';




function App(props) {
  return (
    <BrowserRouter>
      <div className="test">
        <div className="app-wrapper">
          <HeaderContainer />
          <NavContainer store={props.store} />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />

            } />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}




export default App;
