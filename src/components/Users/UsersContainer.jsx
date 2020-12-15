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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export class UsersContainer extends React.Component {
  componentDidMount() {
    const {getUsers, currentPage, pageSize} = this.props;
    getUsers(currentPage, pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount)
    //   }
    // )
  }

  setCurrentPage = (pageNumber) => {
    const {setCurrentPage, getUsers, pageSize} = this.props;
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize)
  }

  render() {
    const {isFetching, totalUsersCount, pageSize, currentPage, portionSize,
      users, unfollow, follow, followingInProgress, toggleFollowingProgress} = this.props;
    return <>
        {isFetching ? <Preloader/> : null}
        <Users totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}
               portionSize={portionSize}
               setCurrentPage={this.setCurrentPage}
               users={users}
               unfollow={unfollow}
               follow={follow}
               followingInProgress={followingInProgress}
               toggleFollowingProgress={toggleFollowingProgress}/>
      </>
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
    portionSize: state.usersPage.portionSize
  }
}

export default compose(
    connect(mapStateToProps,
    {
      setCurrentPage,
      follow,
      unfollow,
      toggleFollowingProgress,
      getUsers
    }),

)(UsersContainer);