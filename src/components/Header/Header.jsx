import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  debugger
  return (
    <header className={s.header}>
      <div className={s.logo_block}>
        <img className={s.logo} src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="Logo"/>
      </div>
      <div className={s.login_block}>
        {props.isAuth ? props.login : <NavLink to='/login'>LogIn</NavLink>}
      </div>
    </header>
  )
}
export default Header;