// 正则获取地址栏参数
export const GetQueryString = (name) => {
    // 这样写的路径，参数？要放到最后,不然截取不到正确的变量值
    var after = window.location.hash.split("?")[1];
    if(after){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = after.match(reg);
        if(r != null)
        {
            return  decodeURIComponent(r[2]);
        }
        else
        {
            return null;
        }
    } else {
        return null
    }
}