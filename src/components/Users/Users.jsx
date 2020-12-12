import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, setCurrentPage,
                 users, followingInProgress, unfollow, follow}) => {
  return <div className={s.users}>

    <Paginator totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}/>

    {
      users.map(u => <User key={u.id}
                           user={u}
                           follow={follow}
                           unfollow={unfollow}
                           followingInProgress={followingInProgress}/>)
    }
  </div>
}
export default Users;