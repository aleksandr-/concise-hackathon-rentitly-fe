import {http} from "../../config/http.js"

const state = {
    data: []
};

const mutations = {
    DATA(state, items) {
        state.data = items
    }
};

const actions = {
    loadSearchResults({commit, state}) {
        console.log("loading");
        return http().get('/items')
            .then(r => r.data)
            .then(response => {
                console.log("loading");
                commit('DATA', response)
            })
    },
};

const getters = {
    getData: state => {
        return state.data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
