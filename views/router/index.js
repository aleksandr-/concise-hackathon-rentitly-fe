import Vue from 'vue'
import Router from 'vue-router'

import page1 from '../viewes/page1.vue'
import page2 from '../viewes/page2.vue'
import page3 from '../viewes/page3.vue'
import page4 from '../viewes/page4.vue'
import page5 from '../viewes/page5.vue'
import Rentitly from '../Rentitly'

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
                        path: '/4/:id',
                        name: 'page4',
                        component: page4,
                    },
                    {
                        path: '/5',
                        name: 'page5',
                        component: page5,
                    }
                ]
            }
        ]
});

export default router