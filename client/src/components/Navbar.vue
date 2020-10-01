<template>
    <div>
        <div>
            <b-navbar type="light" variant="dark">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" v-model="newCity" placeholder="Enter city"></b-form-input>
                    <b-button variant="outline-success" class="my-2 my-sm-0" @click="searchCity(newCity)">Search</b-button>
                </b-nav-form>
            </b-navbar>
        </div>

    </div>
</template>

<script>
    import {addCity} from "../store/action/weatherRequest.js";


    export default {
        name: "Navbar",
        components: {

        },
        data: function() {
            return {
                newCity: "",
                result: [],
            }
        },
        methods: {
            searchCity: function(newCity){
            addCity(newCity);
            this.newCity = "";
        }
    }
    }
</script>

<style scoped>

</style>
