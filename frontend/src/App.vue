<template>
  <div id="app">
    <router-view></router-view> <!-- This is where routed components will be rendered -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// You can remove HelloWorld import if it's not needed
export default defineComponent({
  name: 'App'
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
