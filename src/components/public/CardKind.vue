
<template>
    <div class="card">
        <div class="text">
            <div v-for="(info, i) in data" :key="i" v-if="i < 3" class="kind" @click="onClickKind($event, i)">
                <div class="subTitle">{{info.title}}</div>
                <p>
                    {{info.info}}
                </p>
                <span>......</span>
            </div>
            <Divider v-for="(info, i) in data" v-if="i === 0" :key="i + 'divider'"/>

            <div v-for="(info, i) in data" :key="i" v-if="(3 <= i) && (i < 6)" class="kind" @click="onClickKind($event, i)">
                <div class="subTitle">{{info.title}}</div>
                <p>
                    {{info.info}}
                </p>
                <span>......</span>
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
            data
        }
    },
    methods: {
        onClickKind(e, kindid) {
            this.$router.push(`/questkind/${kindid}`)
        }
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
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 1.25rem 0;
            font-size: 0.875rem;
            color: #78849E;
            overflow: hidden;
            .kind {
                width: 4.25rem;
                margin: 0 0.5rem;
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
</style>

