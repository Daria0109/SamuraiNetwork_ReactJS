import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header_img} src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="Logo"/>
        </header>
    )
}
export default Header;