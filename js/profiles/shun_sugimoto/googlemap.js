var map;

function initMap() {
    "use strict";
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 35.628845,
            lng: 139.685284
        },
        zoom: 17
    });
}