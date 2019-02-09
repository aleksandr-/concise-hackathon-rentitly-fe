import Vue from 'vue'
import Router from 'vue-router'

import page1 from '../viewes/page1.vue'
import page2 from '../viewes/page2.vue'
import page3 from '../viewes/page3.vue'
import page4 from '../viewes/page4.vue'
import Rentitly from '../Rentitly'
import store from '../store/store'

Vue.use(Router);

const router = new Router({
    root: '/',
    routes:
        [
            {
                path: '/',
                name: 'page1',
                component: page1,
            },
            {
                path: '/',
                component: Rentitly,
                children: [

                    {
                        path: '/2',
                        name: 'page2',
                        component: page2,
                    },
                    {
                        path: '/3/:id',
                        name: 'page3',
                        component: page3,
                    },
                    {
                        path: '/4',
                        name: 'page4',
                        component: page4,
                    }
                ]
            }
        ]
});

export default router