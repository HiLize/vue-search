<template>
    <Layout :backIconClick="backIconClick">
        <div slot="content">
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
</style>