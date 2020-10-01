<template>
  <b-card
    style="color:white ;background-color: #2c3e50; max-width: 30rem; max-height: 30rem"
    class="m-1"
  >
    <b-row class="m-1">
      <b-col>
        <b-row>
          <router-link class="m-2 h-4" :to="/Advanced/ + datas.city.name">
            <b-col
              ><h1 style="color: white">{{ datas.city.name }}</h1></b-col
            >
          </router-link>
          <b-col
            @click="changeTempSelector"
            v-b-popover.hover.top="'Température ressenti'"
            ><h2>
              {{
                datas.list[value].main.feels_like
                  | celsiusOrFahrenheit(isCelsius)
              }}
            </h2></b-col
          >
          <b-col
            ><b-button @click="refresh">{{
              datas.list[value].dt | moment("LLLL")
            }}</b-button></b-col
          >
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        ><img
          v-bind:src="
            'http://openweathermap.org/img/wn/' +
              datas.list[value].weather[0].icon +
              '@2x.png'
          "
          alt="New york"
          style="transform: scale(1.5)"
      /></b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col @click="changeTempSelector">
        <font-awesome-icon
          :icon="['fa', 'thermometer-half']"
          size="3x"
        ></font-awesome-icon>
        <div>
          <span
            v-if="
              !isSameTemp(
                datas.list[value].main.temp_max,
                datas.list[value].main.temp
              )
            "
            >{{
              datas.list[value].main.temp_max | celsiusOrFahrenheit(isCelsius)
            }}</span
          >
          <h4>
            {{ datas.list[value].main.temp | celsiusOrFahrenheit(isCelsius) }}
          </h4>
          <span
            v-if="
              !isSameTemp(
                datas.list[value].main.temp_min,
                datas.list[value].main.temp
              )
            "
            >{{
              datas.list[value].main.temp_min | celsiusOrFahrenheit(isCelsius)
            }}</span
          >
        </div>
      </b-col>
      <b-col>
        <font-awesome-icon :icon="['fa', 'tint']" size="2x" />
        <h4>{{ datas.list[value].main.humidity }} %</h4>
      </b-col>
      <b-col>
        <font-awesome-icon :icon="['fa', 'wind']" size="2x" />
        <h4>{{ datas.list[value].wind.speed }} m/s</h4>
        <font-awesome-icon
          :icon="['fas', 'long-arrow-alt-down']"
          size="1x"
          v-bind:style="{
            transform: 'rotate(' + datas.list[value].wind.deg + 'deg)',
          }"
        />
      </b-col>
    </b-row>
    <div>
      <b-form-input
        id="range-1"
        v-model="value"
        type="range"
        min="0"
        :max="datas.list.length - 1"
      ></b-form-input>
    </div>
    <Map :positions="data.city.cood" />
  </b-card>
</template>

<script>
import Axios from "axios";
import Map from "./map/Map";

export default {
  name: "CityCard",
  props: { data: Object },
  components: {
    Map,
  },
  data() {
    return {
      isCelsius: true,
      value: 0,
      datas: this.data,
    };
  },
  methods: {
    changeTempSelector: function() {
      this.isCelsius = !this.isCelsius;
    },
    isSameTemp: function(value1, value2) {
      return value1.toFixed(1) === value2.toFixed(1);
    },
    refresh: function() {
      console.log("refresh");
      Axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.datas.city.name +
          "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr"
      ).then((response) => {
        this.value = 1;
        this.datas.list[0] = response.data;
        this.datas.list[0].dt = Date.now();
        this.value = 0;
      });
    },
  } /*,
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
            }*/,

  filters: {
    celsiusOrFahrenheit: function(value, isCelsius) {
      return isCelsius
        ? value.toFixed(1) + "°C"
        : "" + (value * 1.8 + 32.0).toFixed(1) + "°F";
    },
  },
  mounted() {
    Axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.datas.city.name +
        "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr"
    ).then((response) => {
      this.datas.list.unshift(response.data);
    });
  },
};
</script>

<style lang="scss" scoped></style>
