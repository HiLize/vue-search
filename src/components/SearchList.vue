<template>
    <Layout :backIconClick="backIconClick" :isFocus="true" :isListenerScroll="true" :searchHandler="searchHandler">
        <div slot="content" v-if="questList !== null && questList.length">
            <div class="common">{{questList.length}}个相关结果</div>
            <Card v-for="(info, i) in questList" :key="i" :item="info" :keyword="keyword"/>
        </div>
        <div slot="content" class="emptyQuest" v-else-if="questList !== null && questList.length === 0">
            太难了，我还没有收录这个问题
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'

import {getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, CardKind, Card },
    data() {
        return {
            questList: null,
            keyword: ''
        }
    },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        },
        searchHandler(keyword) {
            this.keyword = keyword
            let params = {
                question: keyword
            }
            if (this.$route.params.cate !== '') {
                params.cate = this.$route.params.cate
            }
            getQuestList(params).then(data => {
                this.questList = data
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
    .emptyQuest {
        width: 100%;
        height: 9.25rem;
        line-height: 9.25rem;
        text-align: center;
        background-color: #F1F9FF;
        border-radius: 0.625rem;
        color: #797E77;
        font-size: 0.875rem;
    }
</style>
