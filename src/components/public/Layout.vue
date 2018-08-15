<template>
    <div class="layoutFlex">
        <div class="header">
            <Header :backIconClick="backIconClick">
                <SearchBox v-if="isShowSearch" slot="header" :isFocus="isFocus" @searchHandler="searchHandler" :cate="searchCate"/>
            </Header>
        </div>
        <div class="content" ref="list">
            <slot name="content" />      
        </div>
    </div>
</template>

<script>
import { Icon, Button } from 'iview'
import Header from './Header.vue'
import SearchBox from './SearchBox.vue'


export default {
    components: { Icon, Button, Header, SearchBox },
    props: {
        backIconClick: Function,
        isShowSearch: {
            default: true
        },
        isFocus: {
            default: false
        },
        searchHandler: {
            default: () => {},
            type: Function
        },
        searchCate: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
    .layoutFlex {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%; 
        .header {
            flex: none;
            height: 64px;
        }
        .content {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: auto;
            padding: 1rem;
        }
    }
</style>