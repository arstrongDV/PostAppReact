import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '78ba5620-691a-4908-bc92-0321e8a0f9dd'
    }
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const FollowAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
        .then(response => response)
    }
} 

export const AuthAPI = {
    getAuth() {
        return instance.get('auth/me')
        .then(response => response.data)
    },
    login(email, password, rememberMe=false) {
        return instance.post('/auth/login', {email, password, rememberMe})
        .then(response => response)
    },
    logout(){
        return instance.delete('/auth/login')
        .then(response => response)
    }
}
