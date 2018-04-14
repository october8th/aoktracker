import React, { Component } from "react";
import MyMapComponent from "../../components/Map";
import { Col, Row, Container } from "../../components/Grid";

class Map extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <MyMapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCk5z02yoBXgCTGMOm60MJ9--SXomPc2ic&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
