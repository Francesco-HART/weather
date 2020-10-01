<template>
    <b-card
            style="color:white ;background-color: #2c3e50; max-width: 30rem; max-height: 30rem"
            class="m-1"
    >
        <b-row class="m-1">
            <b-col>
                <b-row>
                    <b-col><h1 style="color: white">{{data.name}}</h1></b-col>
                    <b-col @click="changeTempSelector" v-b-popover.hover.top="'Température ressenti'" ><h2>{{data.main.feels_like | celsiusOrFahrenheit(isCelsius)}}</h2></b-col>
                    <b-col><p>{{ time | moment("LLLL")}}</p></b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col><img v-bind:src="'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'"
                        alt="New york" style="transform: scale(1.5)"></b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col @click="changeTempSelector">
                <font-awesome-icon :icon="['fa','thermometer-half']"
                                   size="3x"></font-awesome-icon>
                <div>
                    <span>{{data.main.temp_max | celsiusOrFahrenheit(isCelsius)}}</span>
                    <h4>{{data.main.temp | celsiusOrFahrenheit(isCelsius)}}</h4>
                    <span>{{data.main.temp_min | celsiusOrFahrenheit(isCelsius)}}</span>
                </div>
            </b-col>
            <b-col>
                <font-awesome-icon :icon="['fa','tint']" size="2x"/>
                <h4>{{data.main.humidity}} %</h4>
            </b-col>
            <b-col>
                <font-awesome-icon :icon="['fa','wind']" size="2x"/>
                <h4>{{data.wind.speed}} m/s</h4>
                <font-awesome-icon :icon="['fas','long-arrow-alt-down']" size="1x"
                                   v-bind:style="{transform:'rotate('+data.wind.deg+'deg)'}"/>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>

    import Axios from "axios";

    export default {
        name: "Advanced",
        data() {
            return {
                isCelsius: true,
                time:"",
                data:{}
            }
        },
        methods: {
            changeTempSelector: function() {
                this.isCelsius = !this.isCelsius;
            }
        }, filters: {
            celsiusOrFahrenheit: function(value, isCelsius) {
                return isCelsius ? value.toFixed(1) + "°C" : "" + (value * 1.8000 + 32.00).toFixed(1) + "°F";
            }
        },mounted() {
                Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.$route.params.cityName + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
                    .then(response => this.data=response.data)

            this.time=Date.now();
        }
    }
</script>

<style lang="scss" scoped>
</style>