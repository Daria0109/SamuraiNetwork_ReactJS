const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber) => (
  {type: SET_CURRENT_PAGE, pageNumber}
)
export const setTotalUsersCountAC = (totalUsers) => ({
  type: SET_TOTAL_USERS_COUNT, totalUsers
})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 34,
  currentPage: 2,
  isFetching: true
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case (FOLLOW):
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
    case (UNFOLLOW):
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
    case (SET_USERS):
      return {
        ...state,
        users: state.users = action.users
      };
    case (SET_CURRENT_PAGE):
      return {
        ...state,
        currentPage: state.currentPage = action.pageNumber
      }
    case (SET_TOTAL_USERS_COUNT):
      return {
        ...state,
        totalUsersCount: state.totalUsersCount = action.totalUsers
      };
    case (TOGGLE_IS_FETCHING):
      return {
        ...state,
        isFetching: state.isFetching = action.isFetching
      }
    default:
      return state;
  }
}
export default usersReducer;