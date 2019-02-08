import Vue from 'vue'
import {http} from "../../config/http.js"


const state = {
    settings: {
        jobCategories: []
    }
};

const mutations = {
    SET_SETTINGS(state, settings) {
        state.settings = settings
    }
};

const actions = {
    loadSettings({commit}) {
        http().get('/settings')
            .then(r => r.data.data)
            .then(settings => {
                commit('SET_SETTINGS', settings)
            })
    }
};

const getters = {
    settings: state => {
        return state.settings
    },
    jobCategories: state => {
        return Vue._.map(state.settings.jobCategories, 'name')
    },
    jobs: state => category => {
        let jobCategories = Vue._.find(state.settings.jobCategories, (type) => { return type.name === category; });
        return Vue._.get(jobCategories, 'jobs');
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}