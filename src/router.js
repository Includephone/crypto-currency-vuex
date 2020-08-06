import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ()=>import('./views/Dashboard.vue')
        },
        {
            path: '/currency/:name',
            component: ()=>import('./views/CoinPage.vue')
        }
    ]
})