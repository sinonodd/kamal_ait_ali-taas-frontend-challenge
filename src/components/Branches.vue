<template>
  <div class="text-left my-4">
    <h1 class="ml-2 my-4 text-muted">Branches:</h1>
    <div v-for="branch in branches" class="p-2 shadow" :key="branch.name">
      <h5 class="ml-3 py-3 text-danger">{{branch.name}}</h5>
      <h6 class="ml-5 text-muted">{{branch.commit.sha}}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: ['branches'],
};
</script>
