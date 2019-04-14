<template>
  <div id="header-app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" to="/">
        <img src="/src/assets/logo.png" width="40" height="40" alt>
        <strong>
        <h2>Movies</h2>
        </strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto text-menu-navbar">
          <li class="nav-item">
            <router-link class="nav-link" to="/foo">My Account</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  el: "#header-app"
};
</script>

<style scope>
.navbar-light .navbar-nav .nav-link {
    color: rgba(255,255,255,.5)!important;
}

.bg-light {
  background-color: #464d59 !important;
}

h2 {
  color: white;
}

.navbar {
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.text-menu-navbar li {
  margin-left: 1em;
  margin-right: 1em;
}

.nav-link h2 {
  font-size: 12pt;
  margin-left: 0.5em;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  display: inline;
}
</style>