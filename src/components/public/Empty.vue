<template>
    <div slot="content" class="emptyQuest">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    .emptyQuest {
        width: 100%;
        height: 9.25rem;
        line-height: 9.25rem;
        text-align: center;
        background-color: #F1F9FF;
        border-radius: 0.625rem;
        color: #797E77;
        font-size: 0.875rem;
    }
</style>

