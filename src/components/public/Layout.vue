<template>
    <div class="layoutFlex">
        <div class="header">
            <Header :backIconClick="backIconClick">
                <SearchBox slot="header" :inputFocus="inputFocus"/>
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
        inputFocus: Function
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