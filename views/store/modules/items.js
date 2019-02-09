import {http} from "../../config/http.js"

const _ = require('lodash');

const state = {
    data: [],
};

const mutations = {
    DATA(state, data) {
        state.data = data
    }
};

const actions = {
    loadSearchResults({commit, state}) {
        return http().get('/items')
            .then(r => r.data)
            .then(response => {
                commit('DATA', response)
            })
    }
};

const getters = {
    getData: state => {
        return state.data
    },
    getById: (state, getters) => id => {
        return _.find(state.data, data => data.id === id)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
