<template>
  <div id="main-contant">
    <div class="container app-margin text-center">
      <div class="row">
        <div
          class="col-lg-2 col-md-6 col-sm-6 img-margin"
          v-for="(a, index) in info.data.results"
          :key="a.id"
        >

          <router-link :to="'/movie?q=' + currentPage + '&n=' + index ">
            <div class="tooltip-img">
              <img :src="poster + a.poster_path" width="100%">
              <span class="tooltiptext">{{ a.original_title }}</span>
            </div>
          </router-link>
        </div>
      </div>
      <br>
      <v-pagination
        v-model="currentPage"
        :page-count="currentPage+1"
        :classes="bootstrapPaginationClasses"
        :labels="paginationAnchorTexts"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import vPagination from "vue-plain-pagination";

export default {
  name: "main-contant",
  data() {
    return {
      url_api:
        "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=",
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
      paginationAnchorTexts: {
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last'
      }
    };
  },
  created() {
    axios
      .get(this.url_api + this.currentPage)
      .then(response => (this.info = response));
  },
  updated() {
    axios
      .get(this.url_api + this.currentPage)
      .then(response => (this.info = response));
  },
  components: {
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
  margin-bottom: 2em;
}

.tooltip-img .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #464c58;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 50%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.tooltip-img:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
