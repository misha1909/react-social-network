import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Nav from "./nav"
import nav_classes from "./nav.module.css"
// let NavContainer = (props) => {
//     let menuElements = props.appState.menuData.map(menuLink => <div className={nav_classes.item}><NavLink to={menuLink.to} activeClassName={nav_classes.active}>{menuLink.link}</NavLink></div>)
//     return (
//         <nav className={nav_classes.nav}>
//             {menuElements}
//         </nav>
//     )
// }

let mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
}
let mapDispatchToProps = (dispatch) => {

}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer