<script setup>
import { useRepoStore } from "@/components/MyRepos.vue";
const store = useRepoStore();
// function changePageNumber(n) {
//   store.changePage = 10;
// }
</script>
<template>
  <span>{{ store.page }}</span>
  <button v-for="num in buttonArray" :key="num" @click="store.changePage(num)">
    {{ num }}
  </button>
</template>
<script>
export default {
  name: "pagination-comp",
  methods: {},
  props: {
    buttonArray: Array,
  },
};
</script>
