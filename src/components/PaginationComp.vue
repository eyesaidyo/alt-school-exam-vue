<script setup>
import { useRepoStore } from "@/components/MyRepos.vue";
const store = useRepoStore();
// function changePageNumber(n) {
//   store.changePage = 10;
// }
</script>
<template>
  <div class="pagination">
    <button
      v-for="num in buttonArray"
      :key="num"
      @click="store.changePage(num)"
    >
      {{ num }}
    </button>
  </div>
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
<style scoped>
.pagination {
  display: flex;
  justify-content: center;

  margin: 50px 35%;
}
button {
  padding: 6px 8px;
}
</style>
