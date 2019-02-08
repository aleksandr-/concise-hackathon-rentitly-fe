import Vue from 'vue'
import Router from 'vue-router'

import management from '../viewes/management.vue'
import demo from '../viewes/demo.vue'
import welcome from '../viewes/welcome.vue'
import Rentitly from '../Rentitly'
import store from '../store/store'

Vue.use(Router);

const ifNotAuthenticated = async (to, from, next) => {
    await store.dispatch('loadUser').then(() => {
        if (!store.getters.isAuthenticated) {
            next();
        } else {
            next('/lisa')
        }
    });
};


const router = new Router({
    root: '/',
    routes:
        [

            {
                path: '/',
                name: 'welcome',
                component: welcome,
            },
            {
                path: '/',
                component: Rentitly,
                children: [
                    {
                        path: '/haldus',
                        name: 'management',
                        component: management,
                        meta: {
                            title: () => [{text: 'Vahendite haldus'}]
                        },
                    },
                    {
                        path: '/konto',
                        name: 'account',
                        component: demo,
                        meta: {
                            title: () => [{text: 'Vahendite haldus'}]
                        },
                    }
                ]
            }
        ]
});

export default router