<template>
  <div id="app">
    <IndexQuest/>
  </div>
</template>

<script>
import IndexQuest from './components/IndexQuest.vue'

export default {
  name: 'app',
  components: {
    IndexQuest
  }
}
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
</style>
