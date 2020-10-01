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
      access_token:
        "pk.eyJ1IjoiZnJhbmNlc2NvMjMiLCJhIjoiY2tmcmcyb3lzMDA5ejMwbWpvc2xmNDk0dyJ9.3IS3zOsobWMO6QujV0IN9A",
    };
  },
  props: {
    positions: Object,
  },
  mounted() {
    const pos = [this.positions.lat, this.positions.lng];
    const map = L.map("map").setView(pos, 13);

    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.access_token}`,
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: "your.mapbox.project.id",
        accessToken: "your.mapbox.public.access.token",
      }
    ).addTo(map);

    const circle = L.circle([51.508, -0.11], 500, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
    });
    circle.addTo(map);

    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]);
    polygon.addTo(map);
  },
};
</script>
