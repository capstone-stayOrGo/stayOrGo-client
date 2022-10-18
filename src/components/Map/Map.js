import React, { useEffect } from "react";
import "./Map.css";
import { Loader } from "@googlemaps/js-api-loader"

const loadMap = () => {
  const mapsLoader = new Loader({
    apiKey: "AIzaSyDSQlcJ_1hY3ihSkHu9VEGm5kcWtTYNd5k",
    // version: "weekly",
    // ...additionalOptions,
  });

  // // This example creates a simple polygon representing the Bermuda Triangle.
  // function initMap() {
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 5,
  //     center: { lat: 24.886, lng: -70.268 },
  //     mapTypeId: "terrain",
  //   });
  //   // Define the LatLng coordinates for the polygon's path.
  //   const triangleCoords = [
  //     { lat: 25.774, lng: -80.19 },
  //     { lat: 18.466, lng: -66.118 },
  //     { lat: 32.321, lng: -64.757 },
  //     { lat: 25.774, lng: -80.19 },
  //   ];
  //   // Construct the polygon.
  //   const bermudaTriangle = new google.maps.Polygon({
  //     paths: triangleCoords,
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //   });

  //   bermudaTriangle.setMap(map);
  // }

  // window.initMap = initMap;



  mapsLoader.load().then((google) => {
    
    // const map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 5,
    //   center: { lat: 24.886, lng: -70.268 },
    //   mapTypeId: "terrain",
    // });
    // // Define the LatLng coordinates for the polygon's path.
    // const triangleCoords = [
    //   { lat: 25.774, lng: -80.19 },
    //   { lat: 18.466, lng: -66.118 },
    //   { lat: 32.321, lng: -64.757 },
    //   { lat: 25.774, lng: -80.19 },
    // ];
    // // Construct the polygon.
    // const bermudaTriangle = new google.maps.Polygon({
    //   paths: triangleCoords,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    // });

    // bermudaTriangle.setMap(map);
    
    
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    const marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map,
    });
  });
}

const Map = () => {

    useEffect(()=> {
      loadMap()
    }, [])

  return (
    <div id="map">

    </div>
  )
};

export default Map;
