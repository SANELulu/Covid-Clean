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

const Map = ({ id }) => {
  console.log(id);
  const mapContainer = useRef(null);

  const [lng, setLng] = useState(-80.13627);
  const [lat, setLat] = useState(25.790676);
  const [zoom, setZoom] = useState(15.9);

  // const [mrkLng, setMrkLng] = useState();
  // const [mrkLat, setMrkLat] = useState();
  // const [mrkCoordinates, setMrkCoordinates] = useState([]);

  useEffect(() => {
    //api call to database for json

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // API.getMap(id)
    //   .then((res) => {
    //     const Lng = res.data[0].features[0].geometry.coordinates[0];
    //     const Lat = res.data[0].features[0].geometry.coordinates[1];
    //     setMrkLng(res.data[0].features[0].geometry.coordinates[0]);
    //     setMrkLat(res.data[0].features[0].geometry.coordinates[1]);

    //     new mapboxgl.Marker().setLngLat([Lng, Lat]).addTo(map);
    //   })
    //   .catch((err) => console.log(err));

    API.getMapID(id)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.features[0].properties);
        var popup = new mapboxgl.Popup({ offset: 0 }).setHTML(
          "<h3>" +
            "<a href = " +
            res.data.features[0].properties.website +
            ' target="_blank">' +
            res.data.features[0].properties.title +
            "</a></h3><p>" +
            res.data.features[0].properties.description +
            "</p>" +
            "<p>" +
            res.data.features[0].properties.status +
            "</p>"
        );

        // console.log(res.data.features[0].geometry.coordinates);
        const lngLat = res.data.features[0].geometry.coordinates;
        new mapboxgl.Marker().setLngLat(lngLat).setPopup(popup).addTo(map);
      })
      .catch((err) => console.log(err));

    return () => map.remove();
  }, []);

  // console.log(mrkCoordinates);
  // console.log(mrkLat);
  // console.log(mrkLng);
  // new mapboxgl.Marker().setLngLat([mrkLat, mrkLng]).addTo(map);

  return (
    <div>
      <div
        style={{
          borderRadius: 16,
          border: 1,
          maxHeight: "400px",
          // width: "auto",
        }}
        className="map-container"
        id="map"
        ref={mapContainer}
      />
    </div>
  );
};
export default Map;
