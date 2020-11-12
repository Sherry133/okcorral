//JAVASCRIPT

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const okcorral = { lat: 48.414100, lng: -119.541980 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: okcorral,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: okcorral,
    map: map,
  });
}