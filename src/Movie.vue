<template>
  <div id="movie">
    {{ counter }}
    <div class="container app-margin text-center">
      <div v-for="(b, index) in info_page.data.results" :key="b.id">
        <div v-if="counter == index+1">
          <div>Название: {{ b.original_title }}</div>
          <img :src="poster_movie + b.poster_path" width="200px">
          {{ index+1 }}
          {{ counter }}
        </div>
      </div>
      <div v-if="counter >= 1 && counter <= 20">
        <button v-on:click="counter -= 1">предыдущая</button>
        <button v-on:click="counter += 1">следующая</button>
      </div>
      <div v-else-if="counter > 20">{{ counter = 20}}</div>
      <div v-else-if="counter <= 0">{{ counter = 1}}</div>
    </div>
  </div>
</template>

<script>
import vPagination from "vue-plain-pagination";

export default {
  props: ["query", "number"],
  el: "#movie",
  data() {
    return {
      counter: Number(this.number)+1,
      url_api_page:
        "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=",
      info_page: [],
      poster_movie: "http://image.tmdb.org/t/p/w342",
      movieInfo: JSON.parse(this.query),
      currentPage: 1
    };
  },
  created() {
    axios
      .get(this.url_api_page + this.query)
      .then(response => (this.info_page = response));
  },
  components: {
    vPagination
  }
};
</script>

<style>
</style>