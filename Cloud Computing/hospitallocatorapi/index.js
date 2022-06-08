const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

app = express();
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

app.post("/api/getuserloc", async (res) => {
  if (!navigator.geolocation) {
    return res.json({ status: "error", error: "Geolocation is not supported by this browser." });
  }

  try {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/api/getuseraddrs", async (res) => {
  try {
    navigator.geolocation.getCurrentPosition((position) => {
      const response = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0`);
      const data = response.json();
      setUserAddress(data.results[8].formatted_address);
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/api/getHospitalnearby", async (res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates.latitude},${coordinates.longitude}&radius=1000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyDa5_kBfhUYHZ5Gu2Mqd5qIzdW3PqSMfL0`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const port = process.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));
