<template>
    <Layout :backIconClick="backIconClick" :isShowSearch="false">
        <div slot="content">
            <div class="scollTitle">分类-生活</div>
            <div class="common">999个结果</div>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import Card from './public/Card.vue'

export default {
    components: { Layout, SearchBox, Card, Card },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        }
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