import Vue from 'vue'
import Router from 'vue-router'

// import IndexQuest from './components/IndexQuest'
// import QuestKind from './components/QuestKind'
// import SearchList from './components/SearchList'
// import QuestDetail from './components/QuestDetail'

Vue.use(Router)

// console.log(window.location.href, 'router')
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
            component: resolve => require(['./components/IndexQuest'], resolve)
        },
        {
            path: '/questkind/:cate',
            meta: { title: '问题分类', keepAlive: true },
            component: resolve => require(['./components/QuestKind'], resolve)
        },
        {
            path: '/searchlist/:cate?',
            meta: { title: '搜索列表', keepAlive: true },
            component: resolve => require(['./components/SearchList'], resolve)
        },
        {
            path: '/questdetail/:cate/:questid',
            meta: { title: '问题详情', keepAlive: true },
            component: resolve => require(['./components/QuestDetail'], resolve)
        }
    ]
})
