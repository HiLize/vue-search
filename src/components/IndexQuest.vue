<template>
    <Layout :backIconClick="backIconClick">
        <div slot="content">
            <div class="scollTitle">燕大机器人</div>
            <CardKind />
            <div class="common">常见问题</div>
            <Card questId="11" />
            <Card questId="12" />
            <Card questId="13" />
            <Card questId="14" />
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'

import {getCate} from '@/servers'

export default {
    components: { Layout, SearchBox, CardKind, Card },
    methods: {
        backIconClick() {
            console.log('indexBack')
        },
        getKind() {
            getCate('wisedu').then(data => {
                console.log(data, 'userSign return data')
            })
        }
    },
    mounted() {
        this.getKind()
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
