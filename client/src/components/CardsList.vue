<template>
    <b-container class="d-flex flex-wrap align-content-stretch col-12">
        <div v-for="(data,index) in  this.$store.getters.citiesData" v-bind:key="index" >
                <CityCard class="col-4" v-bind:data="data"></CityCard>
        </div>
    </b-container>

</template>

<script>
    import CityCard from "./CityCard";



    export default {
        name: "CardsList",
        components: {
            CityCard
        }
,
        data() {
            return {

            }
        }
    }

</script>

<style scoped>

</style>
