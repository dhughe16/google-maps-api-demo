/*
* Darcy Hughes
* CSE 485 GoDaddy Team
* Updated: 8-3-18
* Description: Pure JS demo of Google Maps API components which will be used
* in Event Creation Form.
* Adapted from this example:
* https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
*/

// Initialize map centered over Tempe
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.424564, lng: -111.928001},
    zoom: 10
  });

  // Variable setup
  var input = document.getElementById('location-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  var geocoder = new google.maps.Geocoder();
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  var address = '';

  // Setup
  autocomplete.bindTo('bounds', map);
  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);
  infowindow.setContent(infowindowContent);

  // Add event listener for when text in address input is changed
  autocomplete.addListener('place_changed', function() {

    var place = autocomplete.getPlace();
    infowindow.close();
    marker.setVisible(false);

    // If user input is not found, alert
    if (!place.geometry) {
      window.alert("That place was not found.");
      return;
    }

    // Display place
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Mark map
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  });

  // Add event listener to display address on map click
  google.maps.event.addListener(map, 'click', function(event) {

    geocoder.geocode({
      'latLng': event.latLng
    }, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          // Display Address
          input.value = results[0].formatted_address;

          // Mark map
          map.setCenter(results[0].geometry.location);
          map.setZoom(17);
          
          marker.setPosition(results[0].geometry.location);
          marker.setVisible(true);
        }
      }
    });
  });
}
