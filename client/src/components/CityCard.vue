<template>
        <b-card>
            <b-row>
                <b-col cols="12">
                    <b-card-header>
                        <b-row>
                            <b-col><h1 style="color: white">{{data.name}}</h1></b-col>
                            <b-col><img v-bind:src="'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'"
                                        alt="New york"></b-col>
                        </b-row>


                    </b-card-header>
                </b-col>
            </b-row>
            <b-row>
                <b-col @click="changeTempSelector" cols="4">
                    <font-awesome-icon :icon="['fa','thermometer-half']"
                                       size="3x"></font-awesome-icon>
                    <div>
                        <span>{{data.main.temp_max | celsiusOrFahrenheit(isCelsius)}}</span>
                        <h2>{{data.main.temp | celsiusOrFahrenheit(isCelsius)}}</h2>
                        <span>{{data.main.temp_min | celsiusOrFahrenheit(isCelsius)}}</span>
                    </div>
                </b-col>
                <b-col cols="4">
                    <font-awesome-icon :icon="['fa','tint']" size="3x"/>
                    <h2>{{data.main.humidity}} %</h2>
                </b-col>
                <b-col cols="4">
                    <font-awesome-icon :icon="['fa','wind']" size="3x"/>
                    <h2>{{data.wind.speed}} m/s</h2>
                    <font-awesome-icon :icon="['fas','long-arrow-alt-down']" size="2x"
                                       v-bind:style="{transform:'rotate('+data.wind.deg+'deg)'}"/>
                </b-col>
            </b-row>
        </b-card>
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
</style>