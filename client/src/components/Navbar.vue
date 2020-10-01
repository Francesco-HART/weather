<template>
<div>
    <div>
      <b-navbar type="light" variant="dark">
        <b-nav-form>
          <b-form-input class="mr-sm-2" v-model="newCity" placeholder="Enter city"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" @click="addCity">Search</b-button>
        </b-nav-form>
      </b-navbar>
    </div>

    <div>
        <CityCard v-bind:data="result.data"></CityCard>
    </div>
</div>
</template>

<script>
import Axios from 'axios';
import CityCard from "./CityCard";

export default {
name: "Navbar",
    components: {
    CityCard,
    },
data: function() {
    return{
        newCity: "",
        result: [],
    }
   },
   methods: {
    addCity() {
       Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.newCity + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
             .then(response => (this.result = response))
    }
   }
}
</script>

<style scoped>

</style>
