import "./Map.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
//import geoJson from './lincoln-road.json';
import API from "../../Utils/API";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFuc2NveSIsImEiOiJja29mdmQ3dXgwN3Q2MnFsbDJlNXg5MjhsIn0.CBNHvxMcULCnTc2zOUudSg";

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
  const [geoJson, setState] = useState([]);
  const [mrkLng, setMrkLng] = useState();
  const [mrkLat, setMrkLat] = useState();
  // const [mrkCoordinates, setMrkCoordinates] = useState([]);

  useEffect(() => {
    //api call to database for json

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // new mapboxgl.Marker()
    //   .setLngLat([-80.13680234446257, 25.79076001797118])
    //   .addTo(map);

    API.getMap()
      .then((res) => {
        geoJson.push(res.data[0].features[0]);
        // console.log(res.data[0].features[0].geometry.coordinates[0]);
        // console.log(geoJson[0].geometry.coordinates[0]);
        // console.log(geoJson[0].geometry.coordinates[1]);
        const Lng = res.data[0].features[0].geometry.coordinates[0];
        const Lat = res.data[0].features[0].geometry.coordinates[1];
        setMrkLng(res.data[0].features[0].geometry.coordinates[0]);
        setMrkLat(res.data[0].features[0].geometry.coordinates[1]);
        // new mapboxgl.Marker()
        //   .setLngLat([
        //     res.data[0].features[0].geometry.coordinates[0],
        //     res.data[0].features[0].geometry.coordinates[1],
        //   ])
        //   .addTo(map);

        new mapboxgl.Marker().setLngLat([Lng, Lat]).addTo(map);
        // setMrkCoordinates(res.data[0].features[0].geometry.coordinates);

        // console.log(mrkLng);
        // console.log(mrkLat);
        // console.log(res.data[0].features[0].geometry.coordinates);
        // console.log(res.data[0].features[0].properties.website);

        // Render custom marker components

        // geoJson.forEach((Marker)=> {

        //   // create a HTML element for each feature
        //     var el = document.createElement('div');
        //     el.className = 'marker';

        // make a marker for each feature and add to the map
        //     new mapboxgl.Marker(el)
        //     .setLngLat(res.data[0].features[0].geometry.coordinates)[0]
        //     new mapboxgl.Marker(el)
        //     .setLngLat(res.data[0].features[0].geometry.coordinates)[1]
        //     .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        //         .setHTML('<h3>' +'<a href = '+ res.data[0].features[0].properties.website + ' target="_blank">' + res.data[0].features[0].properties.title + '</a></h3><p>' + res.data[0].features[0].properties.description + '</p>'+ '<p>' + res.data[0].features[0].properties.status + '</p>'
        //         ))
        //     .addTo(map);
        //     });

        // return res;
      })
      .catch((err) => console.log(err));
    // console.log(mrkCoordinates);

    // const map = new mapboxgl.Map({
    //   container: mapContainer.current,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [lng, lat],
    //   zoom: zoom,
    // });

    // console.log(mrkCoordinates);
    // var marker = new mapboxgl.Marker().setLngLat().addTo(map);

    // var marker = new mapboxgl.Marker().setLngLat([30.1, 30.4]).addTo(map);

    // new mapboxgl.Marker().setLngLat({ mrkCoordinates }).addTo(map);

    // Clean up on unmount
    return () => map.remove();
  }, []);

  // console.log(mrkCoordinates);

  console.log(mrkLat);
  console.log(mrkLng);

  // new mapboxgl.Marker().setLngLat([mrkLat, mrkLng]).addTo(map);

  return (
    <div>
      <div className="map-container" id="map" ref={mapContainer} />
    </div>
  );
};
export default Map;
