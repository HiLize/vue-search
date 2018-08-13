<template>
    <Layout :backIconClick="backIconClick" :isFocus="true" :isListenerScroll="true">
        <div slot="content" v-if="questList !== null && questList.length">
            <div class="common">4个相关结果</div>
            <Card />
            <Card />
            <Card />
            <Card />
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

export default {
    components: { Layout, SearchBox, CardKind, Card },
    data() {
        return {
            questList: null
        }
    },
    methods: {
        backIconClick() {
            this.$router.push('/index')
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
