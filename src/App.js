import React, { Component } from 'react';
import L from 'leaflet';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import './App.css';
import leafGreen from './assets/leaf-green.png';
import leafRed from './assets/leaf-red.png';
import leafOrange from './assets/leaf-orange.png';
import leafShadow from './assets/leaf-shadow.png';


class App extends Component {
  state = {
    greenIcon: {
      lat: 12.971599,
      lng: 77.594566,
    },
    redIcon: {
      lat: 12.971680,
      lng: 77.594577,
    },
    orangeIcon: {
      lat: 12.971700,
      lng: 77.594588,
    },
    zoom: 13
  }
  grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });
  render() {
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    return (
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionGreenIcon} icon={this.grenIcon}>
        <Popup>
        <h4>Property details :</h4>
        <p>Property Id: Gr1</p>
        <p>Available:true</p>
        <p>Property Type: apartment</p>
        <p>Occupancy limit: 4</p>
        </Popup>
      </Marker>
      <Marker position={positionRedIcon} icon={this.redIcon}>
        <Popup>
        <h4>Property details :</h4>
        <p>Property Id: Re1</p>
        <p>Available:false</p>
        <p>Property Type: condo</p>
        <p>Occupancy limit: 3</p>
        </Popup>
      </Marker>
      <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
        <Popup>
        <h4>Property details :</h4>
        <p>Property Id: Or1</p>
        <p>Available:true</p>
        <p>Property Type: Villa</p>
        <p>Occupancy limit: 5</p>
        </Popup>
      </Marker>
    </Map>
    );
  }
}

export default App;
