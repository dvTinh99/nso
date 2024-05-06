import Repository from "../../../Repositories/repository"

export default {
    async create({ commit, state }, data) {
        const game = await Repository.post('/game/create', data)
        .then(resp => {
            return resp.data
        })
        .catch(error => {
            commit("setError", error)
        })
    },
}