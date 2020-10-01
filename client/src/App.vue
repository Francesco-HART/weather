<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Axios from "axios";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    callCity: function(cityName) {
      Axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr"
      ).then((response) => {
        this.$store.commit("addNewCity", response.data);
      });
    },
  },
  mounted() {
    this.$store.getters.citiesName.forEach((cityName) => {
      this.callCity(cityName);
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
