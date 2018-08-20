<template>
    <Layout v-show="!isShowDetail" :backIconClick="backIconClick">
        <div class="container" ref="list" slot="content" v-if="cate !== null && list !== null">
            <div class="scollTitle">燕大机器人</div>
            <CardKind :data="cate" :questList="list"/>
            <div class="common">常见问题</div>
            <Card v-for="(info, i) in list" :key="i" :item="info"/>
        </div>
        <Loading slot="content" v-else />
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import CardKind from './public/CardKind.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'

import {getCate, getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, CardKind, Card, Loading },
    data() {
        return {
            cate: null,
            list: null,
            isShowDetail: false
        }
    },
    methods: {
        backIconClick() {
            // console.log('indexBack')
        },
        getKind() {
            getCate().then(data => {
                this.cate = data
            })
        },
        getQuestList() {
            getQuestList().then(data => {
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
    // .container {
    //     height: 100%;
    //     width: 100%;
    //     overflow: auto;
    //     padding: 1rem;
    // }
</style>
