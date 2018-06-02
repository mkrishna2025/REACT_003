import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';

 
const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
export default class Maps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      defaultLocation: {
        lat: 51.5258541,
        lng: -0.08040660000006028
      },
      markers: [
        {
          lat: 51.5258540,
          lng: -0.08040660000006027
        },
        {
          lat: 51.6258541,
          lng: -0.08040660000006028
        },
        {
          lat: 51.4258541,
          lng: -0.08040660000006028
        },
        {
          lat: 51.3258541,
          lng: -0.08040660000006028
        }
      ]
    }
  }
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (

        <div>
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                    debugger;
                    console.log(place);
                    var lat = place.geometry.location.lat();
                    var lng = place.geometry.location.lng();
                    this.setState({ defaultLocation: {lat: lat, lng: lng} });
                }}
                types={['(regions)']}
                componentRestrictions={{country: "ind"}}
            />
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={this.state.defaultLocation.lat}
                lng={this.state.defaultLocation.lng}
                zoom={10}
                loadingMessage={'Be happy'}
                params={params}
                onMapCreated={this.onMapCreated}>
                {this.state.markers.map(marker => <Marker
                lat={marker.lat}
                lng={marker.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />)}
            </Gmaps>
        </div>
    );
  }
 
};