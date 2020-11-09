import s from "./Users.module.css";
import userPhoto from "../../assets/images/default-avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

const Users = (props) => {

  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.users}>
      {
        pages.map((p, i) => {
            const pageStyle = p === props.currentPage ? s.active_page : "";
            return (
              <span key={i}
                    className={pageStyle}
                    onClick={() => props.setCurrentPage(p)}> {p} </span>
            )
          }
        )}


      {
        props.users.map(u => <div key={u.id} className={s.user_block}>
            <div className={s.user_left}>
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small ? u.photos.small : userPhoto} className={s.avatar}/>
              </NavLink>
              {u.followed ?
                <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  usersAPI.unfollowUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}>Unfollow</button> :

                <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  usersAPI.followUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.follow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}>Follow</button>
              }
            </div>

            <div className={s.user_right}>
              <div className={s.info}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={s.place}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>

          </div>
        )
      }

    </div>)
}
export default Users;