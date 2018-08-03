import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '500px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 33.424564, lng: -111.928001 }}
  />
)

export class MapComponent extends React.Component {

    render() {
      return <Map />
      }
    }
