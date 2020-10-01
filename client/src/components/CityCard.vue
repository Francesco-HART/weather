<template>
    <b-card
            style="color:white ;background-color: #2c3e50; max-width: 30rem; max-height: 30rem"
            class="m-1"
    >
        <b-row class="m-1">
            <b-col>
                <b-row>
                    <router-link class="m-2 h-4" :to="/Advanced/+data.city.name">
                        <b-col><h1 style="color: white">{{data.city.name}}</h1></b-col>
                    </router-link>
                    <b-col @click="changeTempSelector" v-b-popover.hover.top="'Température ressenti'"><h2>
                        {{data.list[value].main.feels_like | celsiusOrFahrenheit(isCelsius)}}</h2></b-col>
                    <b-col ><b-button @click="refresh">{{ data.list[value].dt | moment("LLLL")}}</b-button></b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col><img v-bind:src="'http://openweathermap.org/img/wn/'+ data.list[value].weather[0].icon+'@2x.png'"
                        alt="New york" style="transform: scale(1.5)"></b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col @click="changeTempSelector">
                <font-awesome-icon :icon="['fa','thermometer-half']"
                                   size="3x"></font-awesome-icon>
                <div>
                    <span v-if="(!isSameTemp(data.list[value].main.temp_max, data.list[value].main.temp))">{{data.list[value].main.temp_max | celsiusOrFahrenheit(isCelsius)}}</span>
                    <h4>{{data.list[value].main.temp | celsiusOrFahrenheit(isCelsius)}}</h4>
                    <span v-if="(!isSameTemp(data.list[value].main.temp_min, data.list[value].main.temp))">{{data.list[value].main.temp_min | celsiusOrFahrenheit(isCelsius)}}</span>
                </div>
            </b-col>
            <b-col>
                <font-awesome-icon :icon="['fa','tint']" size="2x"/>
                <h4>{{data.list[value].main.humidity}} %</h4>
            </b-col>
            <b-col>
                <font-awesome-icon :icon="['fa','wind']" size="2x"/>
                <h4>{{data.list[value].wind.speed}} m/s</h4>
                <font-awesome-icon :icon="['fas','long-arrow-alt-down']" size="1x"
                                   v-bind:style="{transform:'rotate('+data.list[value].wind.deg+'deg)'}"/>
            </b-col>
        </b-row>
      <div>
        <label for="range-1"></label>
        <b-form-input id="range-1" v-model="value" type="range" min="0" max="39"></b-form-input>

      </div>

    </b-card>
</template>

<script>

    import Axios from "axios";

    export default {
        name: "CityCard",
        props: {data: Object},
        data() {
            return {
                isCelsius: true,
                time:"",
                value: 0,
                datas: this.data
            }
        },
        methods: {
            changeTempSelector: function() {
                this.isCelsius = !this.isCelsius;
            },
          isSameTemp: function(value1,value2) {

            return value1.toFixed(1)===value2.toFixed(1);
          }, refresh: function() {
                console.log("refresh");
                Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.datas.name + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
                    .then(response => {
                        this.datas = response.data;
                        this.time = Date.now();
                    })
            }}/*,
            defineBackground: function(weatherId) {
                if (weatherId < 300) {
                    return "thunderstorm.jpeg";
                } else if (weatherId < 400) {
                    return "drizzle.jpg"
                } else if (weatherId < 600) {
                    return "rain.jpg"
                } else if (weatherId < 700) {
                    return "snow.jpg"
                } else if (weatherId < 800) {
                    return "fog.jpg"
                } else if (weatherId <= 802) {
                    return "cloudy.jpeg"
                } else if (weatherId <= 805) {
                    return "heavyCloud.jpg"
                } else {
                    return "sunny.jpg"
                }
            }*/

        ,
        filters: {
            celsiusOrFahrenheit: function(value, isCelsius) {
                return isCelsius ? value.toFixed(1) + "°C" : "" + (value * 1.8000 + 32.00).toFixed(1) + "°F";
            }
        }
        ,
        mounted() {
            this.time = Date.now();
        }
    }
</script>

<style lang="scss" scoped>
</style>
