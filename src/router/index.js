import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../view/login.vue'
import index from '../view/index.vue'
// import App from '../App'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/login",
            name: 'login',
            component: login
        },
        {
            path: "/index",
            name: 'index',
            component: index
        },
        // {
        //     path: '/',
        //     component: App,
        //     children: [
        //         {
        //             path: "/login",
        //             name: 'login',
        //             component: import('../view/login.vue')
        //         },
        //         {
        //             path: "/index",
        //             name: 'index',
        //             component: import('../view/index.vue')
        //         },
        //     ]
        // }

    ],
    // mode: 'history'    
})
