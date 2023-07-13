<template>
  <TheHeaderVue />
</template>

<script>
import TheHeaderVue from "./layout/TheHeader.vue";
export default {
  components: {
    TheHeaderVue,
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";

* {
  font-family: "Poppins";
}

h2 {
  font-size: 1.5rem;
  color: $primary-color;
  font-weight: map-get($font-weigths, regular);
  margin: 5px 0;
  text-align: left;
}

h3 {
  font-size: 1rem;
  color: $primary-color;
  font-weight: map-get($font-weigths, regular);
  margin: 5px 0;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $third-color;
  background: $second-color;
  margin: 0;
  padding: 0 30px;
  min-height: 100vh;
}
</style>