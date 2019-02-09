import Vue from 'vue'
import Vuex from 'vuex'
import items from "./modules/items.js"
import statusModule from "./modules/status.js"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        items,
        statusModule
    },
})
