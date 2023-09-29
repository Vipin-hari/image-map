import React, { useState } from 'react';
import "./image.css";

function IndiaMap({ mapData }) {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleAreaClick = (cityName) => {
    setSelectedCity(cityName);
  };

  const getCityData = () => {
    if (selectedCity) {
      const cityInfo = mapData.find((city) => city.name === selectedCity);
      return (
        <div className="city-card">
          <h2>{selectedCity}</h2>
          <p>Population: {cityInfo.population}</p>
          <p>Total Capital: {cityInfo.capital}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='thana'>
      <img src="TN pakka.jpg" alt="map" className="map-image" useMap="#indiamap" />
      <map name="indiamap">
        {mapData.map((city, index) => (
          <area
            key={index}
            onClick={() => handleAreaClick(city.name)}
            coords={city.coords}
            alt={city.name}
          />
        ))}
      </map>
      <div className="info-Container">
        {getCityData()}
      </div>
    </div>
  );
}

export default IndiaMap;
