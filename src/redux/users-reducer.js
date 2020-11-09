const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => (
  {type: SET_CURRENT_PAGE, pageNumber}
)
export const setTotalUsersCount = (totalUsers) => ({
  type: SET_TOTAL_USERS_COUNT, totalUsers
})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFollowingProgress, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFollowingProgress, userId})

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 34,
  currentPage: 2,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          } else {
            return u
          }
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          } else {
            return u
          }
        })
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