import React from 'react';
import { compose, withProps } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

// Block overscrolling
// http://jsfiddle.net/zF6bf/

const MapComponent = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyCavBq5N0mQ2frc1VkpW7DaPAIPkNHpyI8&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `800px` }} />,
        containerElement: <div style={{ width: '800px', height: `500px` }} />,
        mapElement: <div style={{ width: '800px', height: `600px` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(() => {
    return (
        <GoogleMap
            defaultZoom={1.6}
            defaultCenter={{ lat: 47, lng: 8 }}
            options={{
                minZoom: 1.6
            }}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
    );
});

export default MapComponent;
