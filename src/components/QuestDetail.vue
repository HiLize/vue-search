<template>
    <Layout :backIconClick="backIconClick" :isShowSearch="false">
        <div slot="content">
            <div class="common">{{detail.question}}</div>
            <p>{{detail.answer}}</p>
        </div>
    </Layout>
</template>

<script>
import Layout from './public/Layout.vue'
import {getQuestInfo} from '@/servers'

export default {
    components: { Layout },
    data() {
        return {
            detail: Object
        }
    },
    methods: {
        backIconClick() {
            window.close();
            // this.$router.go(-1)
        },
        getInfo() {
            getQuestInfo(this.$route.params.questid).then(data => {
                this.detail = data
            })
        }
    },
    mounted() {
        this.getInfo()
    }
}
</script>

<style lang="less" scoped>
    .common {
        color: #797E77;
        font-size: 1.75rem;
        margin-bottom: 2rem;
        line-height: 2rem;
    }
    p {
      font-size: 1rem;
      color: #797E77;
      line-height: 1.75rem;
    }
</style>
