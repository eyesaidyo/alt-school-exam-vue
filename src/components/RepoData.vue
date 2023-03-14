<template>
  <h1>repo details</h1>
  <div class="back">
    <router-link to="/"><span class="back-txt">go back</span></router-link>
    <div class="card">
      <p>id: {{ store.currentRepo.id }}</p>
      <p>name: {{ store.currentRepo.name }}</p>
      <p>
        url: <a>{{ store.currentRepo.html_url }}</a>
      </p>
      <p>date created: {{ store.currentRepo.created_at }}</p>
      <p>forks: {{ store.currentRepo.forks }}</p>
      <p>visibility: {{ store.currentRepo.visibility }}</p>
    </div>
  </div>
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
<style scoped>
h1 {
  text-align: center;
  text-decoration: underline;
  margin-bottom: 30px;
}
.back {
  text-align: left;
  width: 65%;
  margin: 10px auto;
  background-color: #333333;
  box-shadow: 2px 2px 4px #66666600;
  border-radius: 2px;
}
.back-txt {
  color: yellow;
  background-color: #333333;
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #333333;
  padding: 20px;

  align-items: center;
}
p {
  background-color: #333333;
}
</style>
