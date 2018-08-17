<template>
    <Spin slot="content" fix size="small">
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load" style="color: #52C7CA"></Icon>
        <div style="color: #52C7CA">Loading</div>
    </Spin>
</template>

<script>
import { Icon, Spin } from 'iview'
export default {
    components: { Icon, Spin }
}
</script>


<style lang="less" scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>

