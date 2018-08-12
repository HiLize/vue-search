<template>
    <div class="layoutFlex">
        <div class="header">
            <Header :backIconClick="backIconClick">
                <SearchBox v-if="isShowSearch" slot="header" :inputFocus="inputFocus" :isFocus="isFocus"/>
            </Header>
        </div>
        <div class="content">
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
        inputFocus: {
            type: Function,
            default: null
        },
        isShowSearch: {
            default: true
        },
        isFocus: {
            default: false
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
            height: 100%;
            width: 100%;
            overflow: auto;
            padding: 1rem;
        }
    }
</style>