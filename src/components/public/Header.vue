<template>
    <div class="header">
        <div class="headerFlex">
            <Icon class="backIcon" type="md-arrow-back"  size="24" @click="backIconClick"/>
            <div class="right">
                <slot name="header" ></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from 'iview'
export default {
    components: { Icon },
    props: {
        backIconClick: Function
    }
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    // display: flex;
    // flex: none;
    // justify-content: space-between;
    // align-items: center;
    height: 64px;
    width: 100%;
    line-height: 64px;
    padding: 0 1.5rem;
    background-color: #ffffff;
    .headerFlex {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        .backIcon {
            flex: none;
            width: 24px;
            margin-right: 1rem;
        }
        .right {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
