import "./css/Hospitalocate.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [userAddress, setUserAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ latitude: "-6.199986729419447", longitude: "106.8914532692658" });
  const [isAddressVisible, setAddressVisiblitly] = useState(false);

  useEffect(() => {
    console.log(coordinates.latitude + "" + coordinates.longitude);
    getUserAddress();
    getHospitalInfo();
  }, [coordinates]);

  const getLocation = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setAddressVisiblitly(true);
      });
    } else alert("Geolocation is not supported by this browser.");
  };

  const getUserAddress = async () => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0`);
    const data = await response.json();
    setUserAddress(data.results[8].formatted_address);
  };

  const getHospitalInfo = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates.latitude},${coordinates.longitude}&radius=1000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0`
    );
    const data = await response.json();
    console.log(data);
  };

  const handelLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occured.");
    }
  };

  return (
    <div className="Map">
      <h2>Find the Nearest Hospital</h2>

      <button className="buttonloc" onClick={() => getLocation()}>
        Locate Me
      </button>

      <h4>Your Coordinates</h4>

      <p>Latitude: {isAddressVisible ? coordinates.latitude : null}</p>
      <p>Longitude: {isAddressVisible ? coordinates.longitude : null}</p>
      <p>Address: {isAddressVisible ? userAddress : ""}</p>

      <h4>Here is the nearest hospital From your location </h4>

      {isAddressVisible ? (
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0&zoom=12&q=record+hospital+near+${userAddress}`} />
      ) : (
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0&zoom=12&q=${coordinates.latitude},${coordinates.longitude}`} />
      )}
    </div>
  );
};
export default App;
