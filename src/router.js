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
            component: resolve => require(['./components/IndexQuest'], resolve)
        },
        {
            path: '/questkind/:kindid',
            meta: { title: '问题分类' },
            component: resolve => require(['./components/QuestKind'], resolve)
        },
        {
            path: '/searchlist',
            meta: { title: '搜索列表'},
            component: resolve => require(['./components/SearchList'], resolve)
        },
        {
            path: '/questdetail/:questid',
            meta: { title: '搜索列表'},
            component: resolve => require(['./components/QuestDetail'], resolve)
        }
    ]
})
