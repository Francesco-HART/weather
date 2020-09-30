<template>
    <div class="card">
        <b-card>
            <b-container>
                <b-card-header>
                    <h1 style="color: white">{{data.name}}</h1>
                    <img v-bind:src="'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'" alt="New york">
                </b-card-header>
                <b-row>
                    <b-col c @click="changeTempSelector">
                        <font-awesome-icon :icon="['fa','thermometer-half']"
                                           size="3x"></font-awesome-icon>
                        <div>
                            <span>{{data.main.temp_max | celsiusOrFahrenheit(isCelsius)}}</span>
                            <h2>{{data.main.temp | celsiusOrFahrenheit(isCelsius)}}</h2>
                            <span>{{data.main.temp_min | celsiusOrFahrenheit(isCelsius)}}</span>
                        </div>

                    </b-col>
                    <b-col>
                        <font-awesome-icon :icon="['fa','tint']" size="3x"></font-awesome-icon>
                        <h2>{{data.main.humidity}} %</h2>
                    </b-col>
                    <b-col>
                        <font-awesome-icon :icon="['fa','wind']" size="3x"></font-awesome-icon>
                        <h2>{{data.wind.speed}} m/s</h2>
                        <font-awesome-icon :icon="['fas','long-arrow-alt-down']" size="2x"
                                           v-bind:style="{transform:'rotate('+data.wind.deg+'deg)'}"></font-awesome-icon>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>
    </div>
</template>

<script>

    export default {
        name: "CityCard",
        props: {data: Object},
        data() {
            return {
                isCelsius: true
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
        },
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 40em;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>