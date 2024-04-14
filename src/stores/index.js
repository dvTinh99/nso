
import { createStore } from 'vuex'
// store modules
import auth from './modules/auth/store';

export default createStore({
  modules: {
    auth,
  },
  getters: {
    isLogin (state) {
      return state.auth.isLogin
    },
    isAdmin (state) {
      return state.auth.isAdmin
    }
  },
  strict: true,
})
