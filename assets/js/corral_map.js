/** @format */

// Initialize and add the map
function initMap() {
    // The location of okcorral
    const okcorral = { lat: 48.4141, lng: -119.54198 };
    // The map, centered at okcorral
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: okcorral,
    });
    // The marker, positioned at okcorral
    const marker = new google.maps.Marker({
        position: okcorral,
        map: map,
    });
}
