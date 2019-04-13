<template>
  <div id="movie">
    <h1>Название: {{ movieInfo.original_title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['query'],
  el: "#movie",
  data() {
    return {
      movieInfo: JSON.parse(this.query)
    }
  }
};
</script>

<style>
</style>