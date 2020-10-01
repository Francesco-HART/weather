<template>
    <div>
        <div>
            <b-navbar type="light" variant="dark">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" v-model="newCity" placeholder="Enter city"></b-form-input>
                    <b-button variant="outline-success" class="my-2 my-sm-0" @click="searchCity(newCity)">Search
                    </b-button>
                </b-nav-form>
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
            }
        },
        methods: {
            searchCity: function(newCity) {
                Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
                    .then(response => {this.$store.commit('addNewCity', response.data)})
                console.log(this.$store.getters.citiesData)
                this.newCity = "";
            }
        }
    }
</script>

<style scoped>

</style>
