<template>
<div>
  <h1>{{datas.city.name}}</h1>
  <div>
      <b-table v-for="(tabline, index) in datas.list" :key="index" title="météo sur 5 jour toutes les 3h"
       active>
        <template v-if="index > 0" slot="title">
          {{tabline.dt | moment("LLLL")}}
        </template>
        <div v-if="index > 0">
          <p>
            Température ressenti : {{tabline.main.feels_like | celsiusOrFahrenheit(isCelsius)}}
          </p>
          <p>
            Température max : {{ tabline.main.temp_max }}
          </p>
          <p>
            Température min : {{ tabline.main.temp_min }}
          </p>
          <p>
            Température : {{ tabline.main.temp }}
          </p>
          <p>
            Humidité : {{tabline.main.humidity}} %
          </p>
          <p>
            Vent :{{tabline.wind.speed}} m/s
          </p>
        </div>
      </b-table>
  </div>
</div>
</template>

<script>
export default {
name: "TabWeather",
  props : {
    data: Array,
  },
  data() {
    return {
      isCelsius: true,
    }
  },
  filters: {
    celsiusOrFahrenheit: function(value, isCelsius) {
      return isCelsius ? value.toFixed(1) + "°C" : "" + (value * 1.8000 + 32.00).toFixed(1) + "°F";
    }
  },
}
</script>

<style scoped>

</style>
