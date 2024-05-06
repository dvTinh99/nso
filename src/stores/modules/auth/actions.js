import Repository from "../../../Repositories/auth.repository"

export default {
    async register({ commit, state }, data) {
        await Repository.post('/auth/register', data)
        .then(resp => {
            const { user } = resp.data;
            console.log('user', user);
        
        })
        .catch(error => {
            commit("setError", error)
        })
    },
    async login({ commit, state }, data) {
        const user = await Repository.post('/auth/login', data)
        .then(resp => {
            return resp.data
        })
        .catch(error => {
            commit("setError", error)
        })

        window.localStorage.setItem('token', user.accessToken);
        window.localStorage.setItem('nickname', user.user.nickname);
        window.localStorage.setItem('id', user.user.id);
        window.localStorage.setItem('username', user.user.username);
        window.localStorage.setItem('xu', user.user.xu);
        commit("setIsLogin", true)
        commit("setAccessToken", user.accessToken)
    },
    async info({ commit, state }, data) {
        const TOKEN = window.localStorage.getItem('token');
        const user = await Repository.get('/auth/info', {
            headers: {
                'Authorization': `Basic ${TOKEN}` 
            }
        })
        .then(resp => {
            let user = resp.data.user;
            if (user.is_admin) {
                commit("setIsAdmin", true)
                commit("setIsLogin", true)
            }
            commit("setInfo", user)
        })
        .catch(error => {
            commit("setError", error)
        })
    },
    async setIsLogin({ commit, state }, data) {
        commit("setIsLogin", data)
    },
}

