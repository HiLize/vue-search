import Vue from 'vue'
import Router from 'vue-router'

// 该种方法会全部加载页面，造成页面展示变慢，使用底下的懒加载方法
// import IndexQuest from './components/IndexQuest'
// import QuestKind from './components/QuestKind'
// import SearchList from './components/SearchList'
// import QuestDetail from './components/QuestDetail'

Vue.use(Router)

export default new Router({
    // mode: 'history', // 默认是hash会加#， 这样window.location.search取到为空，按照？来获取
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            name: '/index',
            path: '/index',
            meta: { title: '首页' },
            component: resolve => require(['./components/IndexQuest'], resolve)
        },
        {
            name: '/questkind',
            path: '/questkind/:cate',
            meta: { title: '问题分类', keepAlive: true },
            component: resolve => require(['./components/QuestKind'], resolve)
        },
        {
            name: '/searchlist',
            path: '/searchlist/:cate?',
            meta: { title: '搜索列表', keepAlive: true },
            component: resolve => require(['./components/SearchList'], resolve)
        },
        {
            name: '/questdetail',
            path: '/questdetail/:cate/:questid/:keyword?',
            meta: { title: '问题详情' },
            component: resolve => require(['./components/QuestDetail'], resolve)
        }
    ]
})
