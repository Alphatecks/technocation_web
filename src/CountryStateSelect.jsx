import React, { useState, useEffect } from 'react';

const CountryStateSelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    fetch('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': 'cTB2TFkyVFpZWjhmcWVyZ0RLVWdoODNiZzhWRVBlSFYxdXNEN2Q1bA=='
      }
    })
    .then(response => response.json())
    .then(data => {
      setCountries(data);
    })
    .catch(error => console.error('Error fetching countries:', error));
  };

  const fetchStates = (countryCode) => {
    fetch(`https://api.countrystatecity.in/v1/country/${countryCode}/states`, {
      headers: {
        'X-CSCAPI-KEY': 'cTB2TFkyVFpZWjhmcWVyZ0RLVWdoODNiZzhWRVBlSFYxdXNEN2Q1bA=='
      }
    })
    .then(response => response.json())
    .then(data => {
      setStates(data);
    })
    .catch(error => console.error('Error fetching states:', error));
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    fetchStates(countryCode);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
  };

  return (
    <form>
      {/* Country Select */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.iso2} value={country.iso2}>{country.name}</option>
        ))}
      </select>

      {/* State Select */}
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states.map(state => (
          <option key={state.iso2} value={state.iso2}>{state.name}</option>
        ))}
      </select>

      {/* Other form fields here */}
    </form>
  );
};

export default CountryStateSelect;
