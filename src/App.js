import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfileContainer />} path='/profile'/>
                    <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                    <Route render={() => <UsersContainer/>} path='/users'/>
                    <Route render={() => <News/>} path='/news'/>
                    <Route render={() => <Music/>} path='/music'/>
                    <Route render={() => <Settings/>} path='/settings'/>
                </div>
            </div>
    );
};

export default App;
