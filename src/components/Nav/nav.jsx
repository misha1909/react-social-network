import { NavLink } from "react-router-dom"
import nav_classes from "./nav.module.css"
let Nav = (props) => {
    let menuElements = props.navBar.menuData.map(menuLink => <div className={nav_classes.item}><NavLink to={menuLink.to} activeClassName={nav_classes.active}>{menuLink.link}</NavLink></div>)
    return (
        <nav className={nav_classes.nav}>
            {menuElements}
        </nav>
    )
}
export default Nav