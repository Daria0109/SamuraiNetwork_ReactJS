import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return (
    <header className={s.header}>
      <div className={s.logo_block}>
        <img className={s.logo} src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="Logo"/>
      </div>
      {props.isAuth
        ? <div className={s.login_block}>
          <span className={s.login}>{props.login}</span>
          <button onClick={props.logout}>LogOut</button>
        </div>
          : <NavLink to='/login'><button>LogIn</button></NavLink>}
        </header>
        )
      }
      export default Header;