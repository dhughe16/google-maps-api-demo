import React from "react"
import { GoogleMapLoader, GoogleMap, DirectionsRenderer, google } from "react-google-maps";

/*
* Adapted from this example:
* https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
*/


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.424564, lng: -111.928001},
    zoom: 10
  });

  var input = document.getElementById('location-input');
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);
  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();

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

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });
}

export class LocationInput extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return <div>
        <div id="main">
          <h1>Event Creation Form</h1>
          <form>
            <label>Event title:</label>
            <input type="text" name="title"/><br/>
            <label>Date:</label>
            <input type="pac-input" name="date"/><br/>
            <label>Location:</label>
            <input type="text" name="location" id="location-input"/><br/>
            <label height="50px">Description:</label>
            <textarea rows="4" cols="50" name="desc"></textarea><br/>
            <label>YouTube Video:</label>
            <input type="text" name="video" id="video-input"/>
            <button>Upload Video</button><br/><br/>
            <input type="submit" value="Submit" id="submit-button"/>
          </form>
        </div>

        <GoogleMap />

          <div id="infowindow-content">
            <img src="" width="16" height="16" id="place-icon"/>
            <span id="place-name"  class="title"></span><br/>
            <span id="place-address"></span>
        </div>
      </div>

  }
}
