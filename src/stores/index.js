
import { createStore } from 'vuex'
// store modules
import auth from './modules/auth/store';

export default createStore({
  modules: {
    auth,
  },
  getters: {
    isLogin (state) {
      let token = window.localStorage.getItem('token');
      if (!token) return false;
      return token != '';
    },
    isAdmin (state) {
      return state.auth.isAdmin
    }
  },
  strict: true,
})
