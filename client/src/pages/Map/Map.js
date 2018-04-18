import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import MyMapComponent from "../../components/Map";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Ripples from "../../images/ripples.jpg";
import "./Map.css";
import API from "../../utils/API";

class Map extends Component {
  constructor(props, context) {
        super(props, context);
        this.state = {
            lat: "",
            lng: ""
        }
    }    
  componentDidMount() {
        this.grabLoc();
    };
  grabLoc = () => {
        API.getLoc()
            .then( res =>
                this.setState({lat: res.data.location.lat})
                )
            .catch(err => console.log(err));
        API.getLoc()
            .then( res =>
                this.setState({lng: res.data.location.lng})
                )
            .catch(err => console.log(err));

    };

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
              lng = {this.state.lng}
              lat = {this.state.lat}
            />
          </Col>
        </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Map;
