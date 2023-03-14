<template>
  <h2>rasine's repositories</h2>
  <div class="profile">
    <img
      class="profile-pic"
      src="https://avatars.githubusercontent.com/u/96142543?v=4"
      alt="avatar"
    />
    <div class="profile-details">
      <p>Name: {{ store.myProfile.name }}</p>
      <p>Bio: {{ store.myProfile.bio }}</p>
      <p>Location: {{ store.myProfile.location }}</p>
      <p>Public Repositories: {{ store.myProfile.public_repos }}</p>
    </div>
  </div>
  <router-view></router-view>
  <div class="repos-wrap">
    <h5>Repositories:</h5>
    <span>Page {{ store.page }} of {{ store.totalPages }}</span>
    <div v-for="(repo, index) in this.store.repos" :key="index">
      <router-link
        class="links"
        :to="{
          name: 'repoDetails',
          params: { id: repo.id },
        }"
      >
        <div class="repo-card">{{ repo.name }}</div>
      </router-link>
    </div>

    <!-- <router-link to="abc">error 404</router-link> -->
  </div>
  <div class="pagination">
    <PaginationComp :buttonArray="getButtonsArray" />
  </div>
</template>
<script>
import { defineStore } from "pinia";
import PaginationComp from "./PaginationComp.vue";
//import RepoDataVue from "./RepoData.vue";
export const useRepoStore = defineStore("repos", {
  state: () => ({
    reposPerPage: 5,
    buttonsPerPage: 5,
    page: 1,
    repos: [],
    totalPages: 0,
    currentRepo: {},
    myProfile: {},
  }),

  actions: {
    async getRepos() {
      const reposCount = await fetch(`https://api.github.com/users/eyesaidyo`)
        .then((res) => res.json())
        .then((data) => {
          this.myProfile = data;
          console.log(data);
          return data.public_repos;
        });
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

  mounted() {
    this.store.getRepos();
  },

  components: {
    PaginationComp,
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  text-decoration: underline;
}
.links {
  text-decoration: none;
  background-color: inherit;
}
.repo-card {
  background-color: #333333;
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 4px #66666600;
  border-radius: 2px;
}
.repos-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  margin: 0 15%;
}
.profile {
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  width: 70%;
  border: 1px solid #333333;
  padding: 20px;
}
.profile-pic {
  width: 200px;
  border-radius: 4px;
}
.profile-details {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
