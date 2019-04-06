<template>
  <div id="app">
    <header-app></header-app>
    <div class="container app-margin text-center">
      <div class="row">
        <div
          class="col-lg-2 col-md-6 col-sm-6 img-margin"
          v-for="(a, index) in info.data.results"
          :key="a.id"
        >
          <div v-if="index >= currentPage*6-6 && index <= currentPage*6-1">
            <img :src="poster + a.poster_path" width="100%">
          </div>
        </div>
      </div>
      <br>
      <v-pagination
        v-model="currentPage"
        :page-count="Object.keys(info.data.results).length/5"
        :classes="bootstrapPaginationClasses"
        :labels="paginationAnchorTexts"
      ></v-pagination>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import vPagination from "vue-plain-pagination";

const url =
  "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c";

export default {
  name: "app",
  data() {
    return {
      info: [],
      poster: "http://image.tmdb.org/t/p/w342",
      currentPage: 1,
      bootstrapPaginationClasses: {
        // http://getbootstrap.com/docs/4.1/components/pagination/
        ul: "pagination justify-content-center",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link"
      },
      customLabels: {
        first: false,
        prev: "Previous",
        next: "Next",
        last: false
      }
    };
  },
  mounted() {
    axios.get(url).then(response => (this.info = response));
  },
  components: {
    HeaderApp,
    vPagination
  }
};
</script>

<style>
#app {
  background-color: #f1f2f4;
}

.app-margin {
  margin-top: 2em;
}

.img-margin img {
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
}
</style>
