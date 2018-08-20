import Vue from 'vue'
import 'iview/dist/styles/iview.css';
import router from './router'

Vue.config.productionTip = false

// 全局设置路由配置
// router.afterEach((to, from) => {
//   let toRoute = to.path
//         let fromRoute = from.path
//         console.log('afterEach')
//         if (fromRoute.indexOf('/index') !== -1 && toRoute.indexOf('/searchlist') !== -1) {
//             let isRefresh = sessionStorage.getItem('isRefresh')
//             if (isRefresh === '0') {
//                 sessionStorage.setItem('isRefresh', null)
//                 // this.$route.push('/searchlist')
//                 // window.location.reload()
//             } else {
//                 sessionStorage.setItem('isRefresh', '0')
//             }
//         } else if (fromRoute.indexOf('/searchlist') !== -1 && toRoute.indexOf('/index') !== -1) {
//             sessionStorage.setItem('isRefresh', '0')
//         }
// })
new Vue({
  router
}).$mount('#app')
