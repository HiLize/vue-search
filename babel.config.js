module.exports = {
  presets: [
    '@vue/app'
  ],
  // iview 配置可部分引用，以免全部加载打包过大
  plugins: [["import", {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }]]
}