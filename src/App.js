import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {withRouter, Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component<{}> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
          <Route render={() => <DialogsContainer/>} path='/dialogs'/>
          <Route render={() => <UsersContainer/>} path='/users'/>
          <Route render={() => <News/>} path='/news'/>
          <Route render={() => <Music/>} path='/music'/>
          <Route render={() => <Settings/>} path='/settings'/>
          <Route render={() => <Login/>} path='/login'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer  = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiApp = () => {
  return (<BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>)
}
export default SamuraiApp;
