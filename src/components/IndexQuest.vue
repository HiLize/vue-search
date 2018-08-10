<template>
    <Layout>
        <div slot="content"  @click="clickCard">
            <Card shadow>
                <p slot="title">indexQuest</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import { Card } from 'iview'
import {getQest} from '@/servers/quest'

export default {
    components: { Layout, SearchBox, Card },
    methods: {
        clickCard() {
            console.log('click card')
            this.$router.push('/questKind')
            getQest('wisedu').then(data => {
                console.log(data, 'userSign return data')
            })
        }
    }
}
</script>

<style lang="less" scoped>
</style>
