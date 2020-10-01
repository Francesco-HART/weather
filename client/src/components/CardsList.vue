<template>
    <b-container class="d-flex flex-wrap align-content-stretch ">
        <div v-for="(data,index) in  this.$store.getters.citiesData" v-bind:key="index">
                <CityCard  v-bind:data="data"></CityCard>
        </div>
    </b-container>

</template>

<script>
    import CityCard from "./CityCard";

    import Axios from "axios";

    export default {
        name: "CardsList",
        components: {CityCard},
        data() {
            return {

            }
        }, methods: {
            callCity: function(cityName) {
                Axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName  + "&units=metric&appid=bad96578ef9dd9f3f119b3cb1238f1b2&lang=fr")
                    .then(response => {
                      console.log(response.data);
                      this.$store.commit('addNewCity', response.data);})
            }

        }, mounted() {
            this.$store.getters.citiesName.forEach(cityName => {
                this.callCity(cityName)
            })
        }, asyncComputed: {}
    }

</script>

<style scoped>

</style>