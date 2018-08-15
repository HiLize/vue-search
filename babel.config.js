module.exports = {
  presets: [
    '@vue/app'
  ],
  // iview 配置部分加载，以免全部加载打包过大
  plugins: [["import", {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }]]
}