import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/system/login/login.vue'
import main from '../components/system/menu/main.vue'
import content from '../components/system/cs/content.vue'
import menu1 from '../components/system/cs/menu1.vue'
import menu2 from '../components/system/cs/menu2.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:login
        },
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:':id',
                    component: content
                },{
                    path:'列表/list',
                    component: menu1
                },{
                    path:'表单/from',
                    component: menu2
                }
            ]
        }
    ]
})