<template>
    <Layout v-show="!isShowDetail" :backIconClick="backIconClick">
        <div class="container" ref="list" slot="content" v-if="cate !== null && cate.length > 0">
            <div class="scollTitle">燕大机器人</div>
            <CardKind :data="cate" :questList="list"/>
            <div class="common">常见问题</div>
            <Card v-for="(info, i) in list" :key="i" :item="info"/>
        </div>
        <Loading slot="content" v-else />
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'

import {getCate, getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, CardKind, Card, Loading },
    data() {
        return {
            cate: ['一卡通', '校园网', '图书馆', '生活'],
            list: [
                {
                    cate: '一卡通',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                },
                {
                    cate: '校园网',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                },
                {
                    cate: '图书馆',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                },
                {
                    cate: '一卡通',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                },
                {
                    cate: '校园网',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                },
                {
                    cate: '图书馆',
                    question: '如何挂失一卡通',
                    answer: '一卡通若校园卡丢失，请本人立刻按一卡通照以下途径之一进行挂失： 自助服务终端上挂失自助若校园卡丢失一卡通，自助服务终端上挂失自助若校园卡丢失, 自助服务终端上挂失自助若校园卡丢失'
                }
            ],
            isShowDetail: false
        }
    },
    methods: {
        backIconClick() {
            // console.log('indexBack')
        },
        getKind() {
            getCate().then(data => {
                this.cate = data
            })
        },
        getQuestList() {
            getQuestList().then(data => {
                this.list = data
            })
        }
    },
    mounted() {
        // this.getKind()
        // this.getQuestList()
    },
    // deactivated() {
    //     console.log('123')
    //     let path = this.$route.path
    //     this.$nextTick(function(){
    //         let position =sessionStorage.getItem(path) //返回页面取出来
    //         document.getElementById('list').scrollTop = position
    //     })
    // },
    // beforeRouteLeave(to, from, next) {
    //     let fromRoute = from.path
    //     let position = document.getElementById('list').scrollTop
    //     sessionStorage.setItem(fromRoute, position)
    //     // from.meta.keepAlive = false
    //     next() // 一定要加next，否则不会跳转
    // }
}
</script> 

<style lang="less" scoped>
    .scollTitle {
        color: #454F63; 
        font-size: 1.75rem;
    }
    .common {
        color: #797E77;
        font-size: 1rem;
    }
    // .container {
    //     height: 100%;
    //     width: 100%;
    //     overflow: auto;
    //     padding: 1rem;
    // }
</style>
