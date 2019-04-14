<template>
  <div id="movie">
    <div class="blur">
      <div v-for="(b, index) in info_page.data.results" :key="b.id">
        <div v-if="counter == index+1">
          <img :src="poster_movie + b.poster_path" alt="vertical">
        </div>
      </div>
    </div>
    <div class="container-contant">
      <div class="container app-margin text-center container-contant-margin">
        <div class="navigation-margin" v-if="counter >= 1 && counter <= 20">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-left">
              <a class="navigation-movie movelink" v-on:click="counter -= 1">
                <div v-show="counter>1">
                  <i class="fas fa-arrow-circle-left"></i>Previous Movie
                </div>
                <div v-show="counter === 1">
                  <router-link class="nav-link nav-link-back" to="/">
                    <i class="fas fa-arrow-circle-left"></i>Back to list
                  </router-link>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-right">
              <div v-show="counter<20">
              <a class="navigation-movie movelink" v-on:click="counter += 1">
                Next Movie
                <i class="fas fa-arrow-circle-right"></i>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="counter > 20">{{ counter = 20}}</div>
        <div v-else-if="counter <= 0">{{ counter = 1}}</div>
        <div v-for="(b, index) in info_page.data.results" :key="b.id">
          <div v-if="counter == index+1">
            <div class="row">
              <div class="col-lg-4">
                <img class="poster-movie" :src="poster_movie + b.poster_path" width="200px">
              </div>
              <div class="col-lg-8 text-left">
                <div class="movie-info">
                  <div>
                    <h1>{{ b.original_title }} ({{ yearMovie(b.release_date) }})</h1>
                  </div>
                  <div>
                    <div class="info-movie">
                      <h4>Score: {{ b.vote_average }}</h4>
                    </div>
                    <span class="info-movie btn-separator"></span>
                    <div class="info-movie">
                      <h4>Rating: {{ b.popularity }}</h4>
                    </div>
                    <span class="info-movie btn-separator"></span>
                    <div class="info-movie">
                      <h4>Release Date: {{ dateMovie(b.release_date) }}</h4>
                    </div>
                  </div>
                </div>
                <hr class="hr-overview">
                <div>{{ b.overview }}</div>
                <hr class="hr-overview">
              </div>
            </div>
          </div>
        </div>
      </div>
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
      counter: Number(this.number) + 1,
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
  },
  methods: {
    yearMovie: function(date) {
      var year = date.substring(0, 4);
      return year;
    },
    dateMovie: function(date) {
      var year = date.substring(0, 4);
      var day = date.substring(8, 10);
      var arr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var month = arr[Number(date.substring(5, 7)) - 1];
      date = month + " " + day + ", " + year;

      return date;
    }
  }
};
</script>

<style scope>
#movie h1,
h2,
h2,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  color: white !important;
}

.container-contant {
  font-family: "Raleway", sans-serif;
  color: white !important;
}

.container-contant {
  position: relative;
  z-index: 10;
  margin-bottom: 10em;
}

.blur {
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  background: no-repeat center center fixed;
  background-size: cover;
  display: block;
  left: -10px;
  top: -10px;
  bottom: -10px;
  position: fixed;
  right: -10px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  margin: -10px;
}

.blur img {
  top: 0px;
  left: 0px;
  width: 100%;
  object-fit: cover;
  object-position: 0px 0px;
  position: absolute;
  z-index: 1;
  -webkit-filter: brightness(50%);
}

.navigation-margin {
  margin-bottom: 4em;
}

.navigation-movie {
  font-weight: 200;
  font-size: 18pt;
  font-family: "Montserrat", sans-serif;
  color: white !important;
}

.nav-link {
  display: inline;
  color: white;
}

.nav-link-back {
  padding-top: 0px;
}

.nav-link:hover {
  color: #cccccc;
}

.navigation-movie:hover {
  font-weight: 200;
  font-size: 18pt;
  font-family: "Montserrat", sans-serif;
  color: #cccccc !important;
}

.poster-movie {
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 2em;
}

.movie-info {
  margin-bottom: 2em;
}

.fa-arrow-circle-left {
  margin-right: 1.5em;
}

.fa-arrow-circle-right {
  margin-left: 1.5em;
}

.info-movie {
  display: inline;
}

.info-movie h4 {
  display: inline;
}

.btn-separator {
  content: " ";
  border-left: 1px solid white;
  margin: 0 10px;
  height: 34px;
  width: 1px;
}

.hr-overview {
  border: none;
  color: white;
  background-color: white;
  height: 1px;
}

.movelink {
  cursor: pointer;
}

@media (max-width: 600px) {
  .navigation-movie {
    font-weight: 200;
    font-size: 10pt;
    font-family: "Montserrat", sans-serif;
    color: white !important;
  }
  .navigation-movie:hover {
    font-weight: 200;
    font-size: 10pt;
    font-family: "Montserrat", sans-serif;
    color: #cccccc !important;
  }
}
</style>