import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "bcb04db8-51e3-4a52-abad-1b8669db5951"
  }

})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).
      then(ressponce => {
        return ressponce.data
    })
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(responce => {
      return responce.data
    })
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(responce => {
      return responce.data
    })
  },
}

export const headerAPI = {
  getAuth() {
    return instance.get(`auth/me`).then(response => {
      return response.data
    })
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance(`profile/${userId}`).then(response => {
      return response.data
    })
  }
}
