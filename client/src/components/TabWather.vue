<template>
<div>
  <h1>{{data.city.name}}</h1>
  <div>
   <!-- <b-tabs content-class="mt-3">
      <b-tab v-for="(tabline, index) in data.list" :key="index" title="météo sur 5 jour toutes les 3h"
       active>
        <template v-if="index > 0" slot="title">
          {{tabline.dt | moment("LLLL")}}
        </template>
        <div v-if="index > 0">-->


          <b-table striped hover :items="items"></b-table>

    <!--</div>
  </b-tab>
</b-tabs>-->
  </div>
</div>
</template>

<script>
export default {
name: "TabWather",
  props : {
    data: Object,
  },
  data() {
    return {
      isCelsius: true,
      items: [],
    }
  },

  filters: {
    celsiusOrFahrenheit: function(value, isCelsius) {
      return isCelsius ? value.toFixed(1) + "°C" : "" + (value * 1.8000 + 32.00).toFixed(1) + "°F";
    }
  },
  created: function() {
    for (let i = 1 ; i < this.data.list.length ;  i++){
      this.items.push({temperature_ressentie : this.data.list[i].main.feels_like.toFixed(1),
          temperature_max : this.data.list[i].main.temp_max,
          temperature_min : this.data.list[i].main.temp_min,
          temperature : this.data.list[i].main.temp,
          humidity : this.data.list[i].main.humidity,
          vent : this.data.list[i].wind.speed});
    }
  }
}
</script>

<style scoped>

</style>
