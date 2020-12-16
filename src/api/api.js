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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    })
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data
    })
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data
    })
  },
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then(response => {
      return response.data
    })
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
      return response.data
    })
  },
  logout() {
    return instance.delete(`auth/login`).then(response => {
      return response.data
    })
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data
    })
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => {
      return response.data
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status}).then(response => {
      return response.data
    })
  },
  savePhoto(photo) {
    const formData = new FormData;
    formData.append('image', photo)
    return instance.put('profile/photo',
      formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(response => response.data)
  }
}
