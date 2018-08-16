module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js' // 使用vue-router 再引入vue的路径就会改变，这时候就需要配置一下，配置后要build才会生效
            }
        }
    },

    // devServer: {
    //     port: 8085, // 端口号
    //     host: 'localhost',
    //     https: false, // https:{type:Boolean}
    //     open: false, //配置自动启动浏览器
    //     // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    //     // proxy: {
    //     //     '/api': {
    //     //         target: '<url>',
    //     //         ws: true,
    //     //         changeOrigin: true
    //     //     },
    //     //     '/foo': {
    //     //         target: '<other_url>'
    //     //     }
    //     // },  // 配置多个代理
    // }
}