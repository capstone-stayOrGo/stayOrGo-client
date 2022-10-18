import React, { useEffect } from "react";
import "./Map.css";
import { Loader } from "@googlemaps/js-api-loader"

const loadMap = (location) => {

  const mapsLoader = new Loader({
    apiKey: "AIzaSyDSQlcJ_1hY3ihSkHu9VEGm5kcWtTYNd5k"
  });

  mapsLoader.load().then((google) => {

    let map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 8,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  });
}

const Map = (props) => {
  const {location} = props;
  
  useEffect(()=> {
    loadMap(location)
  }, [])

  return (
    <div id="map">

    </div>
  )
};

export default Map;
