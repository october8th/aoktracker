import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import MyMapComponent from "../../components/Map";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Ripples from "../../images/ripples.jpg";
import "./Map.css";

class Map extends Component {
  render() {
    return (
      <Wrapper backgroundImage={Ripples}>
      <Nav />
      <Grid>
        <PageHeader className="headerStyle">
          Find the Location of AOKs
        </PageHeader>
        <Row>
          <Col md={12}>
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCk5z02yoBXgCTGMOm60MJ9--SXomPc2ic&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
        </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Map;
