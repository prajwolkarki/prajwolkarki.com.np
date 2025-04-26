import { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [location, setLocation] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json?token=f96f3f3056c520")
      .then((response) => {
        const locationData = `${response.data.city}, ${response.data.region}, ${response.data.country}`;
        setLocation(locationData);
        localStorage.setItem("lastVisitLocation", locationData);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        const savedLocation = localStorage.getItem("lastVisitLocation");
        if (savedLocation) {
          setLocation(savedLocation);
        } else {
          setLocation("Unknown location");
        }
      });
  }, []);

  return (
    location && (
      <p className="text-sm">
        Last Visit From: {location ? location.slice(-2) : "Loading location..."}
      </p>
    )
  );
};

export default Location;
