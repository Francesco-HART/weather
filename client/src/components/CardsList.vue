<template>
    <b-container class="d-flex flex-wrap align-content-stretch ">
        <div v-for="(data,index) in  this.$store.getters.citiesData" v-bind:key="index">
                <CityCard  v-bind:data="data"></CityCard>
                <TabWather v-bind:data="data"></TabWather>
        </div>
    </b-container>

</template>

<script>
    import CityCard from "./CityCard";
    import TabWather from "@/components/TabWather";


    export default {
        name: "CardsList",
        components: {
          CityCard,
          TabWather,
        },

        data() {
            return {

            }
        }
    }

</script>

<style scoped>

</style>
