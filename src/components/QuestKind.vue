<template>
    <Layout>
        <div slot="content">
            <CardKind />
            <CardKind />
            <CardKind />
            <CardKind />
            <CardKind />
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind'
import { Card } from 'iview'

export default {
    components: { Layout, SearchBox, Card, CardKind }
}
</script>

<style lang="less" scoped>
</style>