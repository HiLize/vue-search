<template>
    <Layout :backIconClick="backIconClick" :inputFocus="inputFocus">
        <div slot="content">
            <div class="scollTitle">燕大机器人</div>
            <CardKind />
            <div class="common">常见问题</div>
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
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'

import {getQest} from '@/servers/quest'

export default {
    components: { Layout, SearchBox, CardKind, Card },
    methods: {
        clickCard() {
            console.log('click card')
            this.$router.push('/questKind')
            getQest('wisedu').then(data => {
                console.log(data, 'userSign return data')
            })
        },
        backIconClick() {
            console.log('indexBack')
        },
        inputFocus() {
            this.$router.push('/searchlist')
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
