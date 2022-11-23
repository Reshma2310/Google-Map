import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useEffect } from 'react';

function Dashboard(props) {

    const [points] = useState([
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 },
        { latitude: 42.5524695, longitude: -120.0400407 }
    ])
    console.log(points)

    const pointMarkers = () => {
        return points.map((store, index) => {
        return <Marker key={index} position={{
            lat: store.latitude,
            lng: store.longitude
        }}
            onClick={() => {
                console.log("You clicked me!", store)
            }} />
        })
    }

    return (
        <Map
            google={props.google}
            zoom={8}
            style={{ width: '100%', height: '100%' }}
            initialCenter={{ lat: 47.444, lng: -122.176 }}

        >
            {pointMarkers()}
            {/* <div style={{ width: '90vw', height: '90vh', border: '1px solid white' }}>
                {
                    points.map((store, index) => (<Marker key={index} position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                        onClick={() => console.log("You clicked me!")} />
                    ))
                }
            </div> */}
        </Map>
    )
}

export default GoogleApiWrapper({
    // https://console.cloud.google.com/google/maps-apis/credentials?project=gogglemapapi-369308&supportedpurview=project (token is copied from this link)
    apiKey: 'AIzaSyCvqNGbbQZjfZoU8ApZPKo0mc_JvM2cEnw'
})(Dashboard);