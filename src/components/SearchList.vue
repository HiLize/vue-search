<template>
    <Layout :backIconClick="backIconClick" :isFocus="true" :isListenerScroll="true" :searchHandler="searchHandler">
        <!-- <Loading slot="content" v-if="isLoading" /> -->

        <div slot="content" v-if="questList !== null && questList.length">
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
    components: { Layout, SearchBox, CardKind, Card, Loading, Empty },
    data() {
        return {
            isLoading: false,
            questList: null,
            keyword: ''
        }
    },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        },
        searchHandler(keyword) {
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
