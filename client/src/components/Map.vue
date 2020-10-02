<template>
    <div id="map" style="width:100%; height:100%"></div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";

    export default {
        name: "Map",
        data() {
            return {
            };
        },
        props: {
            positions: Object,
            cityName: String,
        },
        mounted() {
            const pos = [this.positions.lat, this.positions.lon];
            const map = L.map("map").setView(pos, 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker(pos).addTo(map)
                .bindPopup(this.cityName)
                .openPopup();

        },
    };
</script>
