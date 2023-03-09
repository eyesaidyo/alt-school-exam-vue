<template>
  <p>rasine's repositories</p>
  <div>
    <p
      v-for="(repo, index) in this.store.repos"
      :key="index"
      @click="store.changeNumber"
    >
      {{ repo.name }}
    </p>
    <p>{{ store.name }}</p>
    <button @click="this.setPage">change name</button>
  </div>
  <PaginationComp :buttonArray="getButtonsArray" />
</template>
<script>
import { defineStore } from "pinia";
import PaginationComp from "./PaginationComp.vue";
export const useRepoStore = defineStore("repos", {
  state: () => ({
    name: "ra",
    reposPerPage: 5,
    buttonsPerPage: 5,
    page: 1,
    repos: [],
    totalPages: 0,
  }),

  actions: {
    async getRepos() {
      const reposCount = await fetch(`https://api.github.com/users/eyesaidyo`)
        .then((res) => res.json())
        .then((data) => data.public_repos);
      const totalRepos = await fetch(
        `https://api.github.com/users/eyesaidyo/repos?per_page=${this.reposPerPage}&page=${this.page}`
      ).then((res) => res.json());
      this.repos = totalRepos;
      this.totalPages = Math.ceil(reposCount / this.reposPerPage);
    },
    changePage(num) {
      this.page = num;
      this.getRepos();
    },
    changeNumber() {
      this.page += 1;
    },
  },
});

export default {
  name: "MyRepos",
  setup() {
    const store = useRepoStore();
    return {
      store,
    };
  },
  computed: {
    getButtonsArray() {
      let ans = [];
      for (let i = 1; i <= this.store.totalPages; i++) {
        ans.push(i);
      }
      return ans;
    },
  },
  methods: {
    setPage() {
      this.store.page += 1;
      this.store.getRepos();
    },
  },
  mounted() {
    this.store.getRepos();
  },
  updated() {
    // this.getRepos();
  },
  components: {
    PaginationComp,
  },
};
</script>
