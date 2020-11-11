import {connect} from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers, setCurrentPage
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";


export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount)
    //   }
    // )
  }

  setCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login'/>
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               setCurrentPage={this.setCurrentPage}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
               toggleFollowingProgress={this.props.toggleFollowingProgress}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,
  {
    setCurrentPage,
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers
  })(UsersContainer);