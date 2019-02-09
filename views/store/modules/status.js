import Vue from 'vue'
import {http} from "../../config/http.js"

let systemMessageTimeout;
const state = {
    systemMessage: null,
    status: {},
    date: null,
    toDate: null,
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
    SET_DATE(state, date) {
        state.date = date
    },
    SET_TO_DATE(state, date) {
        state.toDate = date
    },
    SET_ITEM_NAME(state, val) {
        state.itemName = val
    },
    SET_LOCATION_NAME(state, val) {
        state.locationName = val
    }
};

const actions = {
    setDate({commit}, date) {
        commit('SET_DATE', date)
    },
    setToDate({commit}, date) {
        commit('SET_TO_DATE', date)
    },
    setItemName({commit}, name) {
        commit('SET_ITEM_NAME', name)
    },
    setLocationName({commit}, name) {
        commit('SET_LOCATION_NAME', name)
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
    getDate: state => {
        return state.date;
    },
    getToDate: state => {
        return state.toDate;
    },
    getItemName: state => {
        return state.itemName;
    },
    getLocationName: state => {
        return state.locationName;
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
