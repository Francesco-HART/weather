<template>
  <div>
    <div>
      <b-navbar
        class="d-flex justify-content-between"
        type="light"
        variant="dark"
      >
        <div class="m-2">
          <router-link class="m-2 h-4" to="/"
            ><b-button>Home</b-button></router-link
          >
          <router-link class="m-2 h-4" to="/About"
            ><b-button>About</b-button></router-link
          >
          <b-button @click="changeTheme">theme</b-button>
        </div>
        <div>
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              v-model="newCity"
              placeholder="Enter city"
            ></b-form-input>

            <b-button
              variant="outline-success"
              class="my-2 my-sm-0"
              @click="searchCity(newCity)"
              >Search
            </b-button>
            <button class="mr-sm-2 muButton">clickkkkkkk</button>
          </b-nav-form>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
//import {addCity} from "../store/action/weatherRequest.js";
import Axios from "axios";

export default {
  name: "Navbar",
  components: {},
  data: function() {
    return {
      newCity: "",
      result: [],
    };
  },
  methods: {
    searchCity: function(newCity) {
      Axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
          newCity +
          "&units=metric&appid=bad96578ef9dd9f3f119b3cb1238f1b2&lang=fr"
      ).then((response) => {
        if (!this.$store.getters.citiesName.includes(newCity.toLowerCase())) {
          this.$store.commit("addNewCity", response.data);
          this.$store.commit("addCityName", newCity.toLowerCase());
        }
      });
      this.newCity = "";
    },
    changeTheme: function() {
      this.$store.commit("setTheme");
      const styleSheet = document.getElementById("light");
      if (this.$store.getters.theme === "light") {
        styleSheet.removeAttribute("disabled");
      } else {
        styleSheet.setAttribute("disabled", "disabled");
      }
      console.log("pass");
    },
  },
};
</script>
