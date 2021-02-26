import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../view/login.vue'
import index from '../view/index.vue'
import successLogin from '../view/successLogin'
import HelloWorld from '../components/HelloWorld'
import App from '../App'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: "/",
                    name: 'HelloWorld',
                    component: HelloWorld
                },
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
                {
                    path: "/successLogin",
                    name: 'successLogin',
                    component: successLogin
                },
            ]
        }

    ],
    mode: 'history'    
})
