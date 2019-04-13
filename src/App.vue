<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";

export default {
  name: "app",
  components: {
    HeaderApp
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
