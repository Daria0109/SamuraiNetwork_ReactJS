import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {headerAPI} from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    })
  }

  render () {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);