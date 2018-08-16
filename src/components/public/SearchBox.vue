<template>
    <div class="searchFlex" :style="isFocus ? 'justify-content: space-between' : 'justify-content: flex-end'">
        <div v-if="isFocus" class="focusInputContainer">
            <div class="inputFlex">
                <input ref="input"
                    v-model="keyword"
                    type="text"
                    placeholder="搜索"
                    class="input"
                    @input="searchEvent($event)"
                />
            </div>
        </div>
        <Icon v-if="!isFocus" type="ios-search" class="searchIcon" @click="goToSearchList" />
        <div v-if="isFocus" class="searchButton" @click="searchEvent($event)">搜索</div>
    </div>
</template>

<script>
import { Icon } from 'iview'

export default {
    components: {Icon},
    props: {
        isFocus: {
            default: false
        },
        cate: String
    },
    data() {
        return {
            keyword: (sessionStorage.getItem('keyword') !== null && sessionStorage.getItem('keyword') !== "undefined") ? sessionStorage.getItem('keyword') : ''
        }
    },
    methods: {
        searchEvent() {
            this.clearTimer();
            if (this.keyword && this.keyword.length > 0) {
                //获取当前延时函数的ID，便于后面clearTimeout清除该ID对应的延迟函数
                this.timer = setTimeout(() => {
                    this.$emit('searchHandler', this.keyword);
                }, 300);
            } else {
                this.$emit('searchHandler', this.keyword);
            }
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        goToSearchList() {
            this.isFocus ? '' : this.$router.push(`/searchlist/${this.cate}`)
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
  
        }
        .searchIcon {
            font-size: 1.5rem;
        }
        .searchButton {
            flex: none;
            padding: 0 0 0 1rem;
        }
        
    }
</style>