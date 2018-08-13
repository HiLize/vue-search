
<template>
    <div class="card">
        <div class="text">
            <!-- 行 -->
            <div class="rowText" v-for="(data, index) in dataArr" :key="'row' + index">
                <!-- 列 -->
                <div v-for="(info, i) in data" :key="'column' + i" class="kind" @click="onClickKind($event, `${index}${i}`)">
                    <div class="subTitle">{{info.title}}</div>
                    <p>
                        {{info.info}}
                    </p>
                    <span v-if="info.info">......</span>
                </div>
                <!-- 最后一行不现实分割线 -->
                <Divider v-if="index < (dataArr.length - 1)" :key="index + 'divider'"/>
            </div>
        </div>
    </div>
</template>

<script>
import {Divider} from 'iview'
const data = [
    {
        title: '一卡通',
        info: '若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...'
    },
    {
        title: '一卡通',
        info: '若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...'
    },
    {
        title: '一卡通',
        info: '若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...'
    },
    {
        title: '一卡通',
        info: '若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...'
    },
    {
        title: '一卡通',
        info: '若校园卡丢失，请本人立刻按照以下途径之一进行挂失： 自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失自助服务终端上挂失：在校园内自助服务终端上（自助服务）按照提示进行挂失操作...'
    }
]
export default {
    components: {Divider},
    data() {
        return {
            data: data,
            dataArr: []
        }
    },
    methods: {
        onClickKind(e, kindid) {
            this.$router.push(`/questkind/${kindid}`)
        },
        rebuildData() {
            // 重组data，使其可循环显示多行，每行3列
             for(var i = 0,len = this.data.length; i < len; i += 3){
                this.dataArr.push(this.data.slice(i,i+3));
            }
            // 最后一行不足3列的，填满3列占位（因为flex-item使用的均分大小）
            if(this.dataArr.length / 3 !== 0) {
                let length = 3 - (this.dataArr.length % 3)
                for (let i = 0; i < length; i++) {
                    this.dataArr[this.dataArr.length - 1].push({}) 
                }
            }
        }
    },
    mounted() {
        this.rebuildData()
    }
}
</script>


<style lang="less" scoped>
    .card {
        width: 100%;
        min-height: 11.5625rem;
        box-shadow: 0px 4px 16px rgba(69,91,99,0.1);
        background:rgba(255,255,255,1);
        border-radius:0.75rem;
        margin: 1.25rem 0;
        padding: 0 1.25rem;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
            
            width: 100%;
            height: 100%;
            padding: 1.25rem 0;
            font-size: 0.875rem;
            color: #78849E;
            overflow: hidden;
            .rowText {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                .kind {
                    // width: 4.25rem;
                    flex: 1;
                    margin: 0 1rem;
                    max-height: 6.75rem;
                    overflow: hidden;
                    font-size: 0.625rem;
                    color: #78849E;
                    .subTitle {
                        color: #52C7CA;
                        font-size: 1rem;
                    }
                    p {
                        height: 2rem;
                        line-height: 1rem;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>

