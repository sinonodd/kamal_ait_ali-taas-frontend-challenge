<template>
  <div class="container home">
    <div class="d-flex align-items-center mx-4 my-4 justify-content-start">
      <img :src="user.avatar_url" width="70px" class="rounded-circle"  alt="avatar">
      <h1 class="mr-2 text-muted">{{user.login}}</h1>
    </div>
    <Repos :repos="repos"></Repos>
  </div>
</template>
<script>
import Repos from '@/components/Repos.vue';

const API = 'https://api.github.com/users/';

export default {
  components: {
    Repos,
  },
  data: () => ({
    token: '',
    username: '',
    user: {},
    repos: [],
  }),
  async mounted() {
    this.token = this.$route.params.token;
    localStorage.token = JSON.stringify(this.token);
    const token = localStorage.token.split('.')[1];
    const decodedToken = JSON.parse(atob(token));
    this.username = decodedToken.username;
    const res1 = await fetch(`${API}${this.username}`);
    const user = await res1.json();
    this.user = user;
    const res2 = await fetch(this.user.repos_url);
    const repos = await res2.json();
    this.repos = repos;
    console.log(repos);
  },
};
</script>
