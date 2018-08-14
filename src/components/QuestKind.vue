<template>
    <Layout :backIconClick="backIconClick" :searchCate="this.$route.params.cate">
        <div slot="content">
            <div class="scollTitle">分类-{{$route.params.cate}}</div>
            <div class="common">{{cateList.length}}个结果</div>

            <Card v-for="(info, i) in cateList" :key="i + 'kindlist'" :item="info" />
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import SearchBox from './public/SearchBox.vue'
import Card from './public/Card.vue'

import {getQuestList} from '@/servers'

export default {
    components: { Layout, SearchBox, Card, Card },
    data() {
        return {
            cateList: Object
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