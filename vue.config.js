module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/test/'
    : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js' // 使用vue-router 再引入vue的路径就会改变，这时候就需要配置一下，配置后要build才会生效
            }
        },
        // 压缩包过大警告
        // performance: {
        //     hints: false
        // }
    },
   
    // webpack-dev-server 相关配置
//     devServer: {
//         open: process.platform === 'darwin',
//         host: '0.0.0.0',
//         port: 8080,
//         https: false,
//         hotOnly: false,
//         proxy: null, // 设置代理
//         // before: app => {}
//    },
}