<template>
  <section class="container">
    <form>
      <div class="form-group">
        <input
          v-model="searchTerm"
          type="search" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp" placeholder="Search">
      </div>
  </form>
    <h1 class="text-left my-4">Repositories:</h1>
    <div class="d-flex flex-wrap aligh-items-stretch shadow">
      <div v-for="repo in filterdRepos" :key="repo.name"
        class="repos d-flex align-items-stretch text-left">
        <button class="card btn btn-outline-danger border-0 text-muted"
          @click="getBranches(repo.branches_url)">
          {{repo.name}}
        </button>
      </div>
    </div>

    <Branches :branches="branches"></Branches>
  </section>
</template>
<script>
import Branches from '@/components/Branches.vue';

export default {
  components: {
    Branches,
  },
  props: ['repos'],
  data: () => ({
    searchTerm: '',
    branchesUrl: '',
    branches: [],
  }),
  computed: {
    filterdRepos() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, 'gi');
        /* eslint-disable */
        return this.repos.filter((repo) => {
          return repo.name.match(regexp);
        });
        /* eslint-enable */
      }
      return this.repos;
    },
  },
  methods: {
    async getBranches(branchesUrl) {
      const url = branchesUrl.split('{')[0];
      const res = await fetch(url);
      const branches = await res.json();
      this.branches = branches;
      console.log(this.repos);
    },
  },
};
</script>
