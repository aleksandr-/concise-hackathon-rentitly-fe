import {http} from "../../config/http.js"

const state = {
    data: [

        {
            id: 1,
            name: 'Name 1',
            rating: 5,
            location: 'Italy',
            price: 23.0
        },

        {
            id: 2,
            name: 'Name 2',
            rating: 4,
            location: 'Italy',
            price: 123.0
        },

        {
            id: 3,
            name: 'Name 3',
            rating: 5,
            location: 'Italy',
            price: 78.50
        },


    ],
};

const mutations = {
    DATA(state, user) {
        state.user = user
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