import mutations from '../auth/mutations';
import getters from '../auth/getters';
import actions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            isLogin: false, 
            accessToken: '',
            refreshToken: '',
            isAdmin: false,
            error: '',
            info: {
                email: null,
                is_admin: 0,
                username: null,
                nickname: null,
            }
         };
    },
    mutations,
    getters,
    actions,
};
