// import mutations from './mutations';
// import getters from './getters';
// import actions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            isLogin: true, 
            // list state
            token: '',
            errRegister: '',
            refreshToken: '',
            username: '',
            needConfirm: false,
            error: '',
            errResendCode: '',
            errConfirmSignUp: '',
            confirmSignUpUsername: '',
            errSendResetPasswordCode: '',
            errChangePassword: '',
            errResetPassword: '',
            clientID: '',
            appState: '',
            confirmSignUpPassword: '',
            pageStart: '',
            redirectUri: '',
            agreed: false,
            service: '',
            isNanacaraWeb: false,
            cognitoId: '',
            targetPage: '',
            isExpiredRefreshtoken: false,
            isFirstTimeLogin: true,
         };
    },
    // mutations,
    // getters,
    // actions,
};
