<template>
<div>
  <h1>{{data.city.name}}</h1>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab v-for="(tabline, index) in data.list" :key="index" title="météo sur 5 jour toutes les 3h"
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
      </b-tab>
    </b-tabs>
  </div>
</div>
</template>

<script>
export default {
name: "TabWather",
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
