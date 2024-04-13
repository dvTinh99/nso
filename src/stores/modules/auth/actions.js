import Repository from "../../../Repositories/auth.repository"

export default {
    async register({ commit, state }, data) {
        await Repository.post('/auth/register', data)
        .then(resp => {
            const { user } = resp.data;
            console.log('user', user);
        
        })
        .catch(error => {
            commit("setError", errMsg)
        })
    },
    async login({ commit, state }, data) {
        await Repository.post('/auth/login', data)
        .then(resp => {
            console.log('resp',resp);
            
            const { user } = resp.data;
            console.log('user', user);
            commit("setAccessToken", resp.data.accessToken)
        })
        .catch(error => {
            commit("setError", errMsg)
        })
    },
}

