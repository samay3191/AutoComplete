import React from "react";

const CountryList = ({ countries }) => (
  <div>
  { countries.Length > 0 ?
  <ul>
    {countries.map(country => (
      <li key={country.code}>
        {country.name}
      </li>
    ))}
  </ul>
  : 
  <p>No matching country found.</p>
  }
  </div>
);

export default CountryList;