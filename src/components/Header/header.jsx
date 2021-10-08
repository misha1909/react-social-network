import { NavLink } from 'react-router-dom'
import header_classes from './header.module.css'
let Header = (props) => {
    return (
        <header className={header_classes.header}>
            <div className={header_classes.header__logo}>
                <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt="qwe" className="header__logo-img" />
            </div>
            <div className={header_classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
            <div className={header_classes.header__menu}></div>
        </header>
    )
}

export default Header;