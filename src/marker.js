const mapboxgl = require("mapbox-gl");
function buildMarker (type, coordinates) {
let image;
const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
switch (type) {
  case "hotel":
    image = "http://i.imgur.com/D9574Cu.png";
    break;
  case "activity":
    image = "http://i.imgur.com/WbMOfMl.png"
    break;
  case "restaurant":
    image = "http://i.imgur.com/cqR6pUI.png";
    break;
  default:
    image = "http://i.imgur.com/WbMOfMl.png"
}
markerDomEl.style.backgroundImage = `url(${image})`

return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker
