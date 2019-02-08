import Vue from 'vue'
import {http} from "../../config/http.js"
const _ = require('lodash');

const state = {
    rides: []
};

const mutations = {
    SET_RIDES(state, rides) {
        state.rides = rides
    },
    ADD_RIDE(state, newRide) {
        state.rides.push(newRide)
    },
    MODIFIED_RIDE(state, changedRide) {
        const index = Vue._.findIndex(state.rides, Vue._.pick(changedRide, "_id"));
        state.rides.splice(index, 1, changedRide);
    },
    REMOVE_RIDE(state, fieldToDelete) {
        state.rides = Vue._.filter(state.rides, (field) => {
            return field._id !== fieldToDelete._id;
        })
    }
};

const actions = {
    loadAllRides({commit}) {
        return http().get('/ride')
            .then(r => r.data.data)
            .then(rides => {
                commit('SET_RIDES', rides);
            })
    },
    addRide({commit, state}, newRideData) {
        return http().post('/ride', newRideData)
            .then(r => r.data.data)
            .then(response => {
                commit('ADD_RIDE', response)
            })
    },
    editRide({commit, state}, modifiedData) {
        let data = Vue._.pick(modifiedData, ['area', 'code', 'name', 'active']);
        return http().put('/ride/' + modifiedData._id, data)
            .then(r => r.data.data)
            .then(response => {
                commit('MODIFIED_RIDE', response)
            })
    },
    removeRide({commit, state}, field) {
        return http().delete('/ride/' + field._id)
            .then(() => {
                commit('REMOVE_RIDE', field)
            })
    }
};

const getters = {
    rides: state => {
        return _.filter(state.rides, (field) => field.active);
    },
    allRides: state => {
        return state.rides
    },
    ride: state => id => {
        return state.rides.find(ride => ride._id === id);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}