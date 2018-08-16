<template>
    <Layout :backIconClick="backIconClick">
        <div slot="content" v-if="cate !== null && cate.length > 0">
            <div class="scollTitle">燕大机器人</div>
            <CardKind :data="cate" :questList="list"/>
            <div class="common">常见问题</div>
            <Card v-for="(info, i) in list" :key="i" :item="info"/>
        </div>
        <!-- <Loading slot="content" v-else /> -->
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'

import {GetQueryString} from '@/utils'
import {getCate, getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, CardKind, Card, Loading },
    data() {
        return {
            cate: null,
            list: null
        }
    },
    methods: {
        backIconClick() {
            // console.log('indexBack')
        },
        getKind() {
            let tenantId = GetQueryString('tenantId')
            getCate({tenantId: tenantId === null ? 'wisedu' : tenantId}).then(data => {
                this.cate = data
            })
        },
        getQuestList() {
            let tenantId = GetQueryString('tenantId')
            getQuestList({tenantId: tenantId === null ? 'wisedu' : tenantId}).then(data => {
                this.list = data
            })
        }
    },
    mounted() {
        this.getKind()
        this.getQuestList()
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
