<template>
    <b-table  :items="datas" :fields="'temp'"></b-table>
</template>

<script>

    import Axios from "axios";

    export default {
        name: "Advanced",

        data() {
            return {
                fields: ['temp', 'last_name', 'age'],
                datas:{}
            }
        },components: {

        },
        methods: {},
        filters: {},
        mounted() {
            console.log(this.$store.getters.citiesData);
            this.datas=this.$store.getters.citiesData[0].list
            Axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + this.$route.params.cityName  + "&units=metric&appid=bad96578ef9dd9f3f119b3cb1238f1b2&lang=fr")
                .then(response => {
                    this.datas=response.data.list;
                })
        }
    }
</script>

<style lang="scss" scoped>
</style>
