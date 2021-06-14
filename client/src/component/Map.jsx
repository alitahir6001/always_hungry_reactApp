import React, {useState} from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';





const Map = props => {

    // const mapboxApiAccessToken = "pk.eyJ1IjoiZHJwYWtmcm8iLCJhIjoiY2ttdzdiODA1MGFtZDJ2cGV1ZTg5eDE1MiJ9.-xVJisNg3I8ND5-0B7EDew"
    const token = process.env.REACT_APP_MAPBOX_TOKEN
    
    
    const [viewport, setViewport] = useState({
        latitude: 37.540760,
        longitude: -77.433929,
        zoom: 10,
        width: '35vw',
        height: '35vh'
        
    });
    

    return (
        null
        // <div class="pleasework">
        //     <ReactMapGL {...viewport}
        //     mapboxApiAccessToken={"pk.eyJ1IjoiZHJwYWtmcm8iLCJhIjoiY2ttdzdiODA1MGFtZDJ2cGV1ZTg5eDE1MiJ9.-xVJisNg3I8ND5-0B7EDew"}> Markers here</ReactMapGL> 
        // </div>
    )
}

export default Map;