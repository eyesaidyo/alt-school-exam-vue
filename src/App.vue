<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  background-color: #1e1e1e;
  color: white;
  font-family: "Inter", sans-serif;
}
</style>
