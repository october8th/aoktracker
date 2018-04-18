/* eslint-disable no-undef */
import React from "react"
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCk5z02yoBXgCTGMOm60MJ9--SXomPc2ic&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: props.lat, lng: props.lng}}//37.4152559 -77.6135046
  >
    <FusionTablesLayer
      options={{  
        query: {
          select: `location`,
          from: `1Vrh7Wg72U2Yo7_fFJhKHPMDrx_rY-BAtx7v3gdGo`
        },
        styles: [{
          markerOptions: 
          {
            iconName: "large_green"
          }
        }]
      }}
    />
  </GoogleMap>
);

export default MapWithAFusionTablesLayer;