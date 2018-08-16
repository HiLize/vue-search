<template>
    <Layout :backIconClick="backIconClick" :searchCate="this.$route.params.cate">
        <!-- <Loading slot="content" v-if="cateList === null" /> -->

        <div slot="content" v-if="cateList !== null && cateList.length">
            <div class="scollTitle">分类-{{$route.params.cate}}</div>
            <div class="common">{{cateList.length}}个结果</div>

            <Card v-for="(info, i) in cateList" :key="i + 'kindlist'" :item="info" />
        </div>

        <Empty slot="content" v-else-if="cateList !== null && cateList.length === 0">
            该分类下暂无问题
        </Empty>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import Card from './public/Card.vue'
import Loading from './public/Loading.vue'
import Empty from './public/Empty.vue'

import {getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, Card, Loading, Empty },
    data() {
        return {
            cateList: null
        }
    },
    methods: {
        backIconClick() {
            this.$router.go(-1)
        },
        getListByCate() {
            let params = {
                cate: this.$route.params.cate
            }
            getQuestList(params).then(data => {
                this.cateList = data
            })
        }
    },
    mounted() {
        this.getListByCate()
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