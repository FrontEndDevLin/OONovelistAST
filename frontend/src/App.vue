<template>
  <div id="app">
    <WinTitleBar />
    <router-view/>
  </div>
</template>

<script>
import WinTitleBar from "@/components/winTitleBar";
export default {
  name: 'App',
  components: {
    WinTitleBar
  },
  data() {
    return {};
  },
  watch: {},
  methods: {}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}
</style>
