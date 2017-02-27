import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login.vue'
import Main from '../components/Main/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/main',
            component:Main
        }
    ]
})