
<template>
    <div class="card">
        <div class="title" @click="onClick">
            如何挂失<span>一卡通</span>
        </div>
        <div class="text" ref="textDiv">
            <p ref="textP">
                若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失
            </p>
            <span class="more" v-if="isShowMore">...<span @click="onClick">查看更多</span></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questId: String
    },
    data() {
        return {
            isShowMore: false
        }
    },
    methods: {
        onClick() {
            // 打开新页面，使上一页留在浏览位置
            let {href} = this.$router.resolve({path: `/questdetail/${this.questId}`});
            window.open(href, '_blank');
            // this.$router.push(`/questdetail/${this.questId}`)
        },
        showMore() {
            if (this.$refs.textP.clientHeight > this.$refs.textDiv.clientHeight) {
                this.isShowMore = true
            } else {
                this.isShowMore = false
            }
        }
    },
    mounted() {
        this.showMore()
    },
    updated() {
        this.showMore()   
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
            position: relative;
            .more {
                position: absolute;
                bottom: 0;
                right: 0;
                padding-left: 5rem;
                // 透明渐变
                background: linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 1) 55%);
                span {
                    color: #52C7CA;
                }
            }
        }
    }
</style>

