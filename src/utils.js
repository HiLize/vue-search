export const GetQueryString = (name) => {
    // console.log(name, window.location.search, window.location.href)
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}