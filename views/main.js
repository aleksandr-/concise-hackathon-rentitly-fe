import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import VueLodash from 'vue-lodash'
import './stylus/main.styl'
import store from './store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VuetifyConfirm from 'vuetify-confirm'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueYouTubeEmbed, {global: false});
Vue.use(Vuetify, {
    iconfont: 'fa',
    theme: {
        primary: '#895f4e',
        secondary: '#2485bf',
        chips: '#2c88a8',
        secondaryButton: '#34a3c7',
        secondaryButtonLight: '#55a7c7',
        error: '#ff5252'
    }
});
Vue.use(VueLodash);
Vue.use(VuetifyConfirm, {
    buttonFalseText: 'Katkesta',
    color: '#212121',
    icon: 'warning',
    buttonFalseColor: 'black',
    title: 'Hoiatus',
    width: 380,
    property: '$confirm'
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
