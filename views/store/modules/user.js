import {http} from "../../config/http.js"

const state = {
    user: null,
    csrfToken: null
};

const mutations = {
    AUTHENTICATE(state, user) {
        state.user = user
    },
    REFRESH_USER(state, user) {
        state.user = user
    },
    LOG_OUT(state, user) {
        state.user = null
    },
    CSRF(state, csrfToken) {
        state.csrfToken = csrfToken
    }
};

const actions = {
    login({commit, state}, credentials) {
        return http().post('/auth/login', credentials)
            .then(r => r.data)
            .then(response => {
                commit('AUTHENTICATE', response)
            })
    },
    resetPassword({commit, state}, credentials) {
        return http().post('/auth/resetPassword', credentials)
    },
    setNewPasswordAfterReset({commit, state}, credentials) {
        return http().post('/auth/setPasswordAfterReset', credentials)
    },
    loadUser({commit, state}, credentials) {
        return http().get('/auth', credentials)
            .then(r => r.data)
            .then(response => {
                commit('AUTHENTICATE', response)
            }).catch(error => {})
    },
    logout({commit, state}) {
        return http().get('/auth/logout')
            .then(() => {
                console.log("Going to log out");
                commit('LOG_OUT')
            })
    },
    getCsrf({commit, state}) {
        return http().get('/auth/csrf')
            .then(r => r.data.csrfToken)
            .then(csrfToken => {
                commit('CSRF', csrfToken)
            })
    },
    registration({commit, state}, registrationForm) {
        return http().post('/users/registration', registrationForm)
            .then(r => r.data)
            .then(response => {
                commit('AUTHENTICATE', response)
            })
    },
    sendFeedback({commit, state}, message) {
        return http().post('/email/feedback', _.merge(message, {
            name: state.user.company.name,
            email: state.user.email
        }))
    },
    orderArea({commit, state}, order) {
        return http().post('/orders', order)
    },
    updateAccountInfo({commit, state}, accountInfo) {
        return http().put('/users/updateCompany', accountInfo)
            .then(r => r.data)
            .then(response => {
                commit('REFRESH_USER', response)
            })
    }

};

const getters = {
    user: state => {
        return state.user
    },
    isAuthenticated: state => {
        return state.user != null
    },
    csrfToken: state => {
        return state.csrfToken;
    },
    getThisYearPayment: (state, getters) => {
        if (state.user && state.user.status && state.user.status.payments && getters.getCurrentFullYear) {
            return _.find(state.user.status.payments, payment => {
                return payment.year === getters.getCurrentFullYear; });
        }
        return null;
    },
    getRequestedArea: (state, getters) => {
        let thisYearPayment = getters.getThisYearPayment;
        if (thisYearPayment && thisYearPayment.requestedArea) {
            return thisYearPayment.requestedArea;
        }
        return 0;
    },
    getPaidArea: (state, getters) => {
        let thisYearPayment = getters.getThisYearPayment;
        if (thisYearPayment && thisYearPayment.paidArea) {
            return thisYearPayment.paidArea;
        }
        return 0;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}