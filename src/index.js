const mapboxgl = require("mapbox-gl");
const buildMarker = require('../src/marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZWxsZWdvcmRvbiIsImEiOiJjamdvNGY4a2QyMXByMndxbmV4YXoxYW9wIn0.swUcuZzmY5rUoO4-Ga456g';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

let resto = buildMarker("restaurant", [-74.0123717, 40.705309]);
resto.addTo(map)
