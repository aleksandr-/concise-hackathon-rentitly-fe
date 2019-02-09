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
};

const getters = {

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
};

export default {
    state,
    getters,
    actions,
    mutations
}