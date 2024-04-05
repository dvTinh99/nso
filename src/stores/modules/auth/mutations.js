export default {
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
    },
    // setRefreshToken(state, refreshToken) {
    //     state.refreshToken = refreshToken
    // },
    setIsLogin(state, isLogin) {
        state.isLogin = isLogin
    },
    setIsAdmin(state, isAdmin) {
        state.isAdmin = isAdmin
    },
    setError(state, error) {
        state.error = error
    },
}