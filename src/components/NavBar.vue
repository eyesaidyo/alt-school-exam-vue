<template>
  <nav>
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="/abc"><span>Error-404-Page</span></router-link>
    <router-link to="/about"><span>About Me</span></router-link>
  </nav>
  <slot></slot>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
}
span {
  padding: 0 5px;
}
</style>
