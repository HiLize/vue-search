import Vue from 'vue'
import Router from 'vue-router'

import IndexQuest from './components/IndexQuest'
import QuestKind from './components/QuestKind'
import SearchList from './components/SearchList'
import QuestDetail from './components/QuestDetail'

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
            meta: { title: '首页', keepAlive: true },
            component: IndexQuest
        },
        {
            path: '/questkind/:kindid',
            meta: { title: '问题分类', keepAlive: true },
            component: QuestKind
        },
        {
            path: '/searchlist',
            meta: { title: '搜索列表', keepAlive: true },
            component: SearchList
        },
        {
            path: '/questdetail/:questid',
            meta: { title: '问题详情', keepAlive: true },
            component: QuestDetail
        }
    ]
})
