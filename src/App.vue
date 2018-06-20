<template>
  <div id="app">
    <TabsContainer />
  </div>
</template>

<script>
import TabsContainer from './components/tabsContainer.vue';

export default {
  name: 'App',
  components: {
    TabsContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
