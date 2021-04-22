<template>
  <div class="home">
    <h1>{{user.login}}</h1>
    <img :src="user.avatar_url" alt="">
    <ul>
      <li>{{user.repos_url}}</li>
    </ul>
    <div v-for="repo in repos" :key="repo.id" class="container">
      <h1>{{repo.full_name}}</h1>
    </div>
  </div>
</template>

<script>
const URL = 'https://api.github.com/users/sinonodd';

export default {
  name: 'Home',
  data: () => ({
    repos: [],
    user: {},
  }),
  async mounted() {
    const res1 = await fetch(URL);
    const user = await res1.json();
    this.user = user;
    const res2 = await fetch(this.user.repos_url);
    const repos = await res2.json();
    this.repos = repos;
    console.log(this.repos);
  },
};
</script>
