<template>
    <div>
        <h1>{{this.$route.params.cityName}}</h1>
        <b-row>
            <b-col class="col-4">
                <Map :positions="data.city.coord" :cityName="this.$route.params.cityName"></Map>
            </b-col>
            <b-col class="col-8">
                <b-table striped hover :items="items"></b-table>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import Axios from "axios";
    import Map from "../components/Map";

    export default {
        name: "Advanced",
        components: {Map},
        data() {
            return {
                isCelsius: true,
                items: [],
                data:{}
            }
        },

        filters: {
            celsiusOrFahrenheit: function(value, isCelsius) {
                return isCelsius ? value.toFixed(1) + "°C" : "" + (value * 1.8000 + 32.00).toFixed(1) + "°F";
            }
        },
        mounted(){

            this.data=this.$store.getters.citiesData[0].list
            Axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + this.$route.params.cityName  + "&units=metric&appid=bad96578ef9dd9f3f119b3cb1238f1b2&lang=fr")
                .then(response => {
                    this.data=response.data;
                    for (let i = 1 ; i < this.data.list.length ;  i++){
                        this.items.push({date:this.$moment(this.data.list[i].dt*1000).format('lll'),temperature_ressentie : this.data.list[i].main.feels_like.toFixed(1),
                            temperature_max : this.data.list[i].main.temp_max.toFixed(1),
                            temperature_min : this.data.list[i].main.temp_min.toFixed(1),
                            temperature : this.data.list[i].main.temp.toFixed(1),
                            humidity : this.data.list[i].main.humidity,
                            vent : this.data.list[i].wind.speed,
                            temps: this.data.list[i].weather[0].description});
                    }
                })

        }
    }
</script>

<style scoped>

</style>
