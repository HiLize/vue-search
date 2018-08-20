<template>
    <Layout v-if="isRefresh" :backIconClick="backIconClick" :isFocus="true" :isListenerScroll="true" :searchHandler="searchHandler">
        <!-- <Loading slot="content" v-if="isLoading" /> -->

        <div slot="content" ref="content" v-if="questList !== null && questList.length">
            <div class="common">{{questList.length}}个相关结果</div>
            <Card v-for="(info, i) in questList" :key="i" :item="info" :keyword="keyword"/>
        </div>

        <Empty slot="content" v-else-if="questList !== null && questList.length === 0">
            太难了，我还没有收录这个问题
        </Empty>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'
import Empty from './public/Empty.vue'

import {getQuestList} from '@/servers'

export default {
    name: 'searchlist',
    components: { Layout, SearchBox, CardKind, Card, Loading, Empty },
    data() {
        return {
            isLoading: false,
            questList: null,
            keyword: '',
            isRefresh: true
        }
    },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        },
        searchHandler(keyword) {
            // 搜索的时候要把scrollTop置为0
            sessionStorage.removeItem(this.$route.name)
            document.getElementById('list').scrollTop = 0

            this.isLoading = true
            this.keyword = keyword
            let params = {
                question: keyword
            }
            if (this.$route.params.cate !== '') {
                params.cate = this.$route.params.cate
            }
            getQuestList(params).then(data => {
                this.questList = data
                this.isLoading = false
            })
        }
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
            this.keyword = '' // card中的匹配keyword还会匹配，设置为空，即不再匹配
            this.questList = null // layout v-if 但是内部的内容没有变化重置，所以要手动置为null。初始状态
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
    }
    .common {
        color: #797E77;
        font-size: 1rem;
    }
</style>
