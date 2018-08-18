
<template>
    <div class="card">
        <div class="text">
            <!-- 行 -->
            <div class="rowText" v-for="(data, index) in dataArr" :key="'row' + index">
                <!-- 列 -->
                <div v-for="(info, i) in data" :key="'column' + i" class="kind" @click="onClickKind($event, info)">
                    <div class="subTitle">{{info}}</div>
                    <p>
                        <span v-for="(quest, index) in questObj[info]" :key="index + info">{{quest.question}}</span>
                    </p>
                    <span v-if="typeof questObj[info] !== 'undefined' && questObj[info].length >= 2">......</span>
                </div>
                <!-- 最后一行不现实分割线 -->
                <Divider v-if="index < (dataArr.length - 1)" :key="index + 'divider'"/>
            </div>
        </div>
    </div>
</template>

<script>
import {Divider} from 'iview'

export default {
    components: {Divider},
    props: {
        data: Array,
        questList: Array
    },
    data() {
        return {
            dataArr: [],
            questObj: {},
            count: 0
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
            let lastIndex = this.dataArr.length - 1
            // 最后一行不足3列的，填满3列占位（因为flex-item使用的均分大小）
            if(this.dataArr[lastIndex].length / 3 !== 0) {
                let length = 3 - this.dataArr[lastIndex].length
                for (let i = 0; i < length; i++) {
                    this.dataArr[lastIndex].push(null) 
                }
            }
        },
        rebuildQuestList() {
            let cates = this.data
            let questions = this.questList
            let obj = this.questObj
            if (cates.length > 0) {
                for (let i = 0; i < questions.length; i++) {
                    for (let j = 0; j < cates.length; j++) {
                        if (questions[i].cate === cates[j]) {
                            if (typeof obj[cates[j]] === 'undefined') {
                                obj[cates[j]] = []
                            }
                            obj[cates[j]].push(questions[i])
                        }
                    }
                }
            }
        }
    },
    mounted() {
        this.rebuildData()
        this.rebuildQuestList()
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
                        span {
                            display: inline-block;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

