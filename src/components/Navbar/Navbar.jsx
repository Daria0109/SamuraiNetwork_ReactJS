import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import preloader from "../../assets/images/preloader.svg";

console.log(classes)
const Navbar = (props) => {
        return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Message</NavLink></div>
            <div className={classes.item}><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></div>
            <div className={classes.item}><NavLink to='/news' activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>

        <FriendsContainer/>

        </nav>
    )
}
export default Navbar

