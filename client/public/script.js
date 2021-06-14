mapboxgl.accessToken = 'pk.eyJ1IjoiZHJwYWtmcm8iLCJhIjoiY2ttemZoOHJkMDM3OTJvbWhwZ2Y4NHl4dyJ9.IzXzVyFm9hVpwepEVDGORg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

// if current location can't be found, load a default map position
function errorLocation() {
    setupMap([-97.743057 , 30.267153]) 
}

// Load map to current location using the geolocation api call from above
function setupMap(center){
    const map = new mapboxgl.Map({ // creates a new map 
        container: 'map',
        style: 'mapbox://styles/drpakfro/ckmzdtv1x01s018mvq02l6kct',
        center:center,
        zoom: 10
});

map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'

);
}

