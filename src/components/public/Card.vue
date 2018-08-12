
<template>
    <div class="card" @click="onClick">
        <div class="title">
            如何挂失<span>一卡通</span>
        </div>
        <div class="text">
            <p>
                若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...
                <span>查看更多</span>
            </p> 
        </div>
    </div>
</template>

<script>
export default {
    props: {
        handleClick: Function
    },
    methods: {
        onClick() {
            this.$emit('handleClick')
        }
    }
}
</script>


<style lang="less" scoped>
    .card {
        width: 100%;
        height: 11.5625rem;
        box-shadow: 0px 4px 16px rgba(69,91,99,0.1);
        background:rgba(255,255,255,1);
        border-radius:0.75rem;
        margin: 1.25rem 0;
        padding: 0 1.25rem;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            flex: none;
            width: 100%;
            height: 3.875rem;
            line-height: 3.875rem;
            font-size: 1rem;
            color: #454F63;
            border-bottom: 1px solid #F4F4F6;
            span {
                color: #52C7CA;
            }
        }
        .text {
            width: 100%;
            height: 100%;
            margin: 1.25rem 0;
            font-size: 0.875rem;
            color: #78849E;
            overflow: hidden;
            p {
                height: 100%;
                overflow: hidden;
                span {
                    color: #52C7CA;
                }
            }
        }
    }
</style>

