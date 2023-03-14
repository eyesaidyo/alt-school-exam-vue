<template>
  <h1>data</h1>
  <p>id: {{ store.currentRepo.id }}</p>
  <p>name: {{ store.currentRepo.name }}</p>
  <p>forks: {{ store.currentRepo.forks }}</p>
</template>
<script>
import { useRepoStore } from "./MyRepos.vue";

export default {
  setup() {
    const store = useRepoStore();
    return {
      store,
    };
  },

  name: "repo-data",
  methods: {
    getDetails(id) {
      let repo = this.store.repos.filter((repo) => repo.id == id);
      console.log(repo);
      this.store.currentRepo = repo[0];
    },
  },

  mounted() {
    const { id } = this.$route.params;
    console.log(id);
    this.getDetails(id);
    // console.log(this.repo.forks);
    // const response = fetch(`https://api.github.com/repositories/${id}`).then(
    //   (data) => data.json()
    // );
    // this.name = response.name;
    // this.forks = response.forks;
  },
  props: {
    id: String,
    name: String,
  },
};
</script>
