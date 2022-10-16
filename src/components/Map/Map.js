import React from "react";
import "./Map.css";
import { Loader } from "@googlemaps/js-api-loader"

const mapsLoader = new Loader({
  apiKey: "AIzaSyDSQlcJ_1hY3ihSkHu9VEGm5kcWtTYNd5k",
  // version: "weekly",
  // ...additionalOptions,
});

mapsLoader.load().then((google) => {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
});

const Map = () => {
  return (
    <div id="map">

    </div>
  )
};

export default Map;
