<template>
  <div id="app">123
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <agora :channel="channel">
      <agora-audio-sender />
      <agora-audio-receiver />
      <agora-video-receiver />
      <agora-video-sender />
    </agora>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
   data() {
    return {
      channel: "ceshi"
    };
  }
}
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
