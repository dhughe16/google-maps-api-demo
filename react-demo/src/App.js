import React from "react"
import './styles.css';
import { EventForm } from './EventForm';
import { MapComponent } from './MapComponent';
//import { LocationInput } from './LocationInput';

class App extends React.Component {

  render() {
    return (
      <div id="main">
        <h1>Event Creation Form</h1>
        <EventForm /><br/>
        <MapComponent id="map"/>
      </div>
    )
  }
}

export default App;
