<template>
    <div>
        <h1>{{this.$route.params.cityName}}</h1>
        <div>
            <b-table striped hover :items="items"></b-table>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Advanced",

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
                    this.data=response.data; for (let i = 1 ; i < this.data.list.length ;  i++){
                        this.items.push({temperature_ressentie : this.data.list[i].main.feels_like.toFixed(1),
                            temperature_max : this.data.list[i].main.temp_max,
                            temperature_min : this.data.list[i].main.temp_min,
                            temperature : this.data.list[i].main.temp,
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
