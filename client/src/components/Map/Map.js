import './Map.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import geoJson from './lincoln-road.json';

mapboxgl.accessToken = 'pk.eyJ1IjoidmFuc2NveSIsImEiOiJja29mdmQ3dXgwN3Q2MnFsbDJlNXg5MjhsIn0.CBNHvxMcULCnTc2zOUudSg';


const Marker = ({ onClick, children, feature }) => {
    const _onClick = (e) => {
      onClick(feature.properties.description);
    };
  
    return (
      <button onClick={_onClick} className="marker">
        {children}
      </button>
    );
  };

const Map = () => {
    const mapContainer = useRef(null);

    const [lng, setLng] = useState(-80.13627);
    const [lat, setLat] = useState(25.790676);
    const [zoom, setZoom] = useState(15.9);

    useEffect(() => {
       
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        // Render custom marker components
    geoJson.features.forEach(function(marker) {
            // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' +'<a href = '+ marker.properties.website + ' target="_blank">' + marker.properties.title + '</a></h3><p>' + marker.properties.description + '</p>'+ '<p>' + marker.properties.status + '</p>'
            ))
        .addTo(map);
        });


  // Clean up on unmount
   return () => map.remove();
 }, []); 


 return (
    <div>
      <div className="map-container" id="map" ref={mapContainer} />
    </div>
  );
};
export default Map;
