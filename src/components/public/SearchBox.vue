<template>
    <div class="searchFlex" :style="isFocus ? 'justify-content: space-between' : 'justify-content: flex-end'">
        <div :class="isFocus ? 'focusInputContainer' : 'inputContainer'" @click="goToSearchList">
            <div class="inputFlex">
                <input ref="input"
                    v-model="keyword"
                    type="text"
                    placeholder="搜索"
                    class="input"
                    @input="inputChange($event)"
                />
                <Icon v-if="!isFocus" type="ios-search" class="searchIcon" />
            </div>
        </div>
        <div v-if="isFocus" class="searchButton">搜索</div>
    </div>
</template>

<script>
import { Icon } from 'iview'

export default {
    props: {
        isFocus: {
            default: false
        }
    },
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        inputChange(e) {
            console.log('inputChange', e.target.value)
        },
        goToSearchList() {
            this.isFocus ? '' : this.$router.push('/searchlist')
        }
    },
    mounted() {
        // 默认聚焦
        this.isFocus ? this.$nextTick(() => {this.$refs['input'].focus()}) : ''
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
        .mixinInputContainer(@width) {
            width: @width;
            height: 32px;
            line-height: 32px;
            border: 1px solid #000000;
            border-radius: 55px;
            overflow: hidden;
            padding: 0 10px;
        }
        
        .focusInputContainer {
            .mixinInputContainer(@width: 100%);
        }
        .inputContainer {
            .mixinInputContainer(@width: 8.1875rem); 
        }
        .inputFlex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .input {
                width: 100%;
                height: 32px;
                line-height: 32px;
                border: 0;
                -webkit-tap-highlight-color:transparent;
                outline: none;
            }
            .searchIcon {
                flex: none;
                width: 1.25rem;
                font-size: 1.25rem;
                vertical-align: sub;
            }
        }
        .searchButton {
            flex: none;
            padding: 0 0 0 1rem;
        }
        
    }
</style>