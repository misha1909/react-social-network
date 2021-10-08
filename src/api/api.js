import axios from 'axios'



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0df234ce-f6ea-488e-90f0-c6042b2acf76'
    }
})




export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => { return response.data })
        )
    },
    follow(id) {
        return (
            instance.post(`follow/${id}`, {})
                .then(response => { return response.data })
        )
    },
    unfollow(id) {
        return (
            instance.delete(`follow/${id}`, {})
                .then(response => { return response.data })
        )
    },
    getProfile(userId) {
        return (
            instance.get(`profile/` + userId)
                .then(response => { return response.data })
        )
    }

}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
        )
    }
}
