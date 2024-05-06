
import { createStore } from 'vuex'
// store modules
import auth from './modules/auth/store';
import game from './modules/game/store';

export default createStore({
  modules: {
    auth,
    game
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
