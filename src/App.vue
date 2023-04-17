<template>
 <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path"/>
  </router-view>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

#app {
  height: inherit;
  width: inherit;
  padding: 0;
}
</style>
