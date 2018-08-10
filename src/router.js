import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            meta: { title: '首页' },
            component: resolve => require(['./components/IndexQuest'], resolve),
        },
        {
            path: '/questKind',
            meta: { title: '问题分类' },
            component: resolve => require(['./components/QuestKind'], resolve),
        }
    ]
})
