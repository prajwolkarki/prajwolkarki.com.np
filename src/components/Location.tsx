import { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [lastVisitLocation, setLastVisitLocation] = useState<null | string>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("lastVisitLocation");
    if (savedLocation) {
      setLastVisitLocation(savedLocation);
    } else {
      setLastVisitLocation("Unknown location");
    }

    axios
      .get("https://ipinfo.io/json?token=f96f3f3056c520")
      .then((response) => {
        const currentLocation = `${response.data.city}, ${response.data.region}, ${response.data.country}`;
        localStorage.setItem("lastVisitLocation", currentLocation);
      })
      .catch((error) => {
        console.error("Error fetching current location:", error);
        
      });
  }, []);

  return (
    lastVisitLocation && (
      <p className="text-[12px] relative top-[2px] font-tagesschrift">
        Last Visit From: {lastVisitLocation}
      </p>
    )
  );
};

export default Location;
