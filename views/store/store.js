import Vue from 'vue'
import Vuex from 'vuex'
import rides from "./modules/rides.js"
import settingsModule from "./modules/settings.js"
import userModule from "./modules/user.js"
import statusModule from "./modules/status.js"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        rides,
        settingsModule,
        userModule,
        statusModule
    },
})
