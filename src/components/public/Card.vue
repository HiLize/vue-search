
<template>
    <div class="card" @click="onClick" >
        <div class="title" v-html="ruleTitle(item.question)"></div>
        <div class="text" ref="textDiv">
            <p ref="textP" v-html="ruleTitle(item.answer)"></p>
            <span class="more" v-if="isShowMore">...<span @click="onClick">查看更多</span></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keyword: {
            type: String,
            default: ''
        },
        item: {
            default: function() {
                return {
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                }
            }
        }
    },
    data() {
        return {
            isShowMore: false
        }
    },
    methods: {
        onClick() {
            // this.$emit('handleClick', this.item)
            // 打开新页面，使上一页留在浏览位置
            // let {href} = this.$router.resolve({path: `/questdetail/${this.item.cate}/${this.item.id}`});
            // window.open(href, '_blank');
            this.$router.push(`/questdetail/${this.item.cate}/${this.item.id}`)
        },
        showMore() {
            if (this.$refs.textP.clientHeight > this.$refs.textDiv.clientHeight) {
                this.isShowMore = true
            } else {
                this.isShowMore = false
            }
        },
        // 匹配关键字高亮
        ruleTitle(string) {
            let titleString = string;
            if (!titleString) {
            return '';
            }  

            if (this.keyword && this.keyword.length > 0) {
            // 匹配关键字正则
            let replaceReg = new RegExp(this.keyword, 'g');
            // 高亮替换v-html值
            let replaceString = '<span style="color: #52C7CA">' + this.keyword + '</span>';
            // 开始替换
            titleString = titleString.replace(replaceReg, replaceString);
            }
            return titleString;
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
            overflow: hidden;
            font-size: 1rem;
            color: #454F63;
            border-bottom: 1px solid #F4F4F6;
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
                // 透明渐变 to left要加to不然less会警告
                background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 1) 55%);
                span {
                    color: #52C7CA;
                }
            }
        }
    }
</style>

