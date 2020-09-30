<template>
    <b-container>
        <div class="md-layout-item" v-for="(data,index) in datas" v-bind:key="index">
            <CityCard v-bind:data="data.data"></CityCard>
        </div>
    </b-container>

</template>

<script>
    import CityCard from "./CityCard";
    import axios from 'axios';

    export default {
        name: "CardsList",
        components: {CityCard},
        data() {
            return {
                datas: [],
                cityName: '',
                cities: ['paris', 'cergy']
            }
        }, methods: {
            callCity: function(cityName) {
                axios
                    .get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
                    .then(response => (this.datas.push(response)))

            }

        }, mounted() {
            this.cities.forEach(cityName => {
                this.callCity(cityName)
            })
        }, asyncComputed: {}
    }

</script>

<style scoped>

</style>