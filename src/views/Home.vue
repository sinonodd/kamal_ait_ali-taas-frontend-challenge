<template>
  <div class="home">
    <a
          class="btn btn-danger btn-lg"
          :href="getLoginURL"
          role="button">Login with Github</a>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    getLoginURL() {
      return 'http://localhost:5000/auth/github';
    },
  },
};
</script>
