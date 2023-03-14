import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import MyReposVue from './components/MyRepos.vue'
import NotFoundVue from './components/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router';
import RepoDataVue from './components/RepoData.vue';
//import NavBarVue from './components/NavBar.vue'

const pinia = createPinia()

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '',
      component: MyReposVue,
      children: [
        {
          name: 'repoDetails',
          path: 'repos/:id',
          component: RepoDataVue,
          props: true
        },
      ]
    },


    {
      name: 'NotFound',
      path: '/:catchAll(.*)',
      component: NotFoundVue
    }


  ]
})

createApp(App).use(router).use(pinia).mount('#app')
