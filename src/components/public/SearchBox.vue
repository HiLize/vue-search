<template>
    <div class="searchFlex" :style="isFocus ? 'justify-content: space-between' : 'justify-content: flex-end'">
        <input v-model="keyword" type="text" placeholder="搜索" :class="isFocus ? 'focusInput' : 'input'" @focus="inputFocus"/>
        <span v-if="isFocus">搜索</span>
    </div>
</template>

<script>
export default {
    props: {
        isFocus: {
            default: false
        },
        inputFocus: Function
    },
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        inputChange() {
            console.log('focus')
        }
    }
}
</script>

<style lang="less" scoped>
    .searchFlex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        font-size: 0.6875rem;
        .mixininput(@width) {
            width: @width;
            height: 32px;
            border: 1px solid #000000;
            border-radius: 55px;
            -webkit-tap-highlight-color:transparent;
            outline: none;
            padding: 0 10px;
        }
        .focusInput {
            .mixininput(@width: 100%);
        }
        .input {
           .mixininput(@width: 8.1875rem); 
        }
        span {
            flex: none;
            padding: 0 0 0 1rem;
        }
    }
</style>