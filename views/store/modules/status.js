import Vue from 'vue'
import {http} from "../../config/http.js"

let systemMessageTimeout;
const state = {
    systemMessage: null,
    status: {}
};

const mutations = {
    SET_SYSTEM_MESSAGE(state, message) {
        state.systemMessage = {
            text: message.text,
            type: message.type,
        }
    },
    CLEAR_SYSTEM_MESSAGE(state) {
        state.systemMessage = null
    },
    SET_STATUS(state, status) {
        state.status = status
    }
};

const actions = {
    demoModeOff({commit}) {
        commit('SET_DEMO_MODE', false)
    },
    setSystemMessage({commit}, message) {
        commit('SET_SYSTEM_MESSAGE', message);
        clearTimeout(systemMessageTimeout);
        systemMessageTimeout = setTimeout(() => {
            commit('CLEAR_SYSTEM_MESSAGE')
        }, 4000);
    },
    loadStatus({commit}, message) {
        http().get('/status')
            .then(r => r.data.data)
            .then(status => {
                commit('SET_STATUS', status)
            })
    }
};

const getters = {
    isDemoMode: state => {
        return state.demoMode
    },
    getSystemMessageText: state => {
        if (!!state.systemMessage) {
            return state.systemMessage.text;
        }
        return "";
    },
    getSystemMessageType: state => {
        if (!!state.systemMessage) {
            return state.systemMessage.type;
        }
        return "";
    },
    hasSystemMessage: state => {
        return !!state.systemMessage;
    },
    getCurrentFullYear: state => {
        if (state.status.currentDate) {
            return (new Date(state.status.currentDate)).getFullYear();
        }
        return null;
    },
    getTrialUntil: (state, getters) => {
        if (getters.user && getters.user.status && getters.user.status.trialUntil) {
            return getters.user.status.trialUntil;
        }
        return "";
    },
    accountStatus: (state, getters) => {
        let user = getters.user;
        let status = state.status;
        if (user && status) {
            if (user.status.trialUntil > status.currentDate) {
                return "TRIAL"
            }
            if (getters.getPaidArea < getters.getRequestedArea) {
                return "PROCESSING";
            }
            if (Math.max(getters.getRequestedArea, getters.getPaidArea) < getters.getActiveFieldArea) {
                return "NEEDS_CONFIRMATION";
            }
            return "ACTIVE";
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}