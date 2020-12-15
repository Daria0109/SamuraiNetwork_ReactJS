import {usersAPI} from "../api/api";
import {updateObjInArray} from "../utilities/helpers/object-helpers";

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET-USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE-FOLLOWING-PROGRESS";

// A c t i o n  C r e a t o r s
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFollowingProgress, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFollowingProgress,
  userId
})

// T h u n k  C r e a t o r s
export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount))
  }
}

const followUnfollowFlow = async (apiMethod, userId, dispatch, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI)
     await followUnfollowFlow(apiMethod, userId, dispatch, followSuccess)
  }
}
export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    await followUnfollowFlow(apiMethod, userId, dispatch, unfollowSuccess)
  }
}

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 34,
  currentPage: 1,
  portionSize: 10,
  isFetching: true,
  followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId,
          'id', {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId,
          'id', {followed: false})
      };
    case SET_USERS:
      return {
        ...state,
        users: state.users = action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage = action.pageNumber
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: state.totalUsersCount = action.totalUsers
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: state.isFetching = action.isFetching
      }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowingProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}
export default usersReducer;