module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/test/'
    : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js' // 使用vue-router 再引入vue的路径就会改变，这时候就需要配置一下，配置后要build才会生效
            }
        }
    }
}