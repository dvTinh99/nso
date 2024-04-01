
import { createStore } from 'vuex'
// store modules
import auth from './modules/auth/store';

export default createStore({
  modules: {
    auth,
  },
  strict: true,
})
