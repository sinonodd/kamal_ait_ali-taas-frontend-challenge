<template>
  <div class="home">
    <a
          class="btn btn-danger btn-lg"
          :href="getLoginURL"
          role="button">Login with Github</a>
    <div class="d-flex align-items-center mx-4 my-4 justify-content-end">
      <h1 class="mr-2 text-muted">{{user.login}}</h1>
      <img :src="user.avatar_url" width="70px" class="rounded-circle"  alt="avatar">
    </div>
    <div v-for="repo in repos" :key="repo.id"
      class="col-4">
      <h4>{{repo.full_name}}</h4>
    </div>
  </div>
</template>

<script>
const API = 'https://api.github.com/users/sinonodd';

export default {
  name: 'Home',
  data: () => ({
    repos: [],
    user: {},
  }),
  async mounted() {
    const res1 = await fetch(API);
    const user = await res1.json();
    this.user = user;
    const res2 = await fetch(this.user.repos_url);
    const repos = await res2.json();
    this.repos = repos;
    console.log(this.repos);
  },
  computed: {
    getLoginURL() {
      return 'http://localhost:5000/auth/github';
    },
  },
};
</script>
