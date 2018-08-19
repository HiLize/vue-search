<template>
    <Layout v-if="isRefresh" :backIconClick="backIconClick" :searchCate="this.$route.params.cate">
        <!-- <Loading slot="content" v-if="cateList === null" /> -->

        <div slot="content" v-if="cateList !== null && cateList.length">
            <div class="scollTitle">分类-{{$route.params.cate}}</div>
            <div class="common">{{cateList.length}}个结果</div>

            <Card v-for="(info, i) in cateList" :key="i + 'kindlist'" :item="info" />
        </div>

        <Empty slot="content" v-else-if="cateList !== null && cateList.length === 0">
            该分类下暂无问题
        </Empty>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'
import Empty from './public/Empty.vue'

import {getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, Card, Loading, Empty },
    data() {
        return {
            cateList: [
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
            isRefresh: true
        }
    },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        },
        getListByCate() {
            let params = {
                cate: this.$route.params.cate
            }
            getQuestList(params).then(data => {
                this.cateList = data
            })
        }
    },
    mounted() {
        // this.getListByCate()
    },
    activated() {
        // 页面离开的时候this.isRefresh 设置为了false，这时候v-if发挥作用销毁了‘list’，所以会获取不到，也就不需要设置位置了，this.isRefresh=true,会重新渲染组件
        if (document.getElementById('list') !== null) {
            let pathName = this.$route.name
            let position =sessionStorage.getItem(pathName) //返回页面取出来
            position = position === null ? 0 : position
            document.getElementById('list').scrollTop = position
        }

        this.$nextTick(() => {
            this.isRefresh = true
        })
    },
    beforeRouteEnter(to, from, next) {
        // console.log(this, 'beforeRouteEnter')
        next()
    },
    beforeRouteLeave(to, from, next) {
        let toRoute = to.path
        let fromName = from.name

        let position = document.getElementById('list').scrollTop
        sessionStorage.setItem(fromName, position)
        
        if (toRoute.indexOf('/questdetail') === -1) {
            // 只要不是去detail页面，就将isRefresh置为false，下次进来的时候v-if会销毁组件，然后再在activated设置为true，重新渲染
            this.isRefresh = false
            sessionStorage.removeItem(fromName)
        }
        next()
    }
}
</script>

<style lang="less" scoped>
    .scollTitle {
        color: #454F63;
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
    .common {
        color: #797E77;
        font-size: 1rem;
    }
</style>