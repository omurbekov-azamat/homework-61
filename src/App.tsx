import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {GetCountry} from "./types";

const baseUrl = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
const countryUrl = 'https://restcountries.com/v2/alpha/';

function App() {
  const [countries, setCountries] = useState<GetCountry[]>([]);

  const fetchCountry = useCallback(async () => {
    const countriesResponse = await axios.get<GetCountry[]>(baseUrl)
    const promises = countriesResponse.data.map(async country => {
      const countryResponse = await axios.get<GetCountry>(countryUrl + country.alpha3Code);

      return {
        name: country.name,
        capital: countryResponse.data.capital,
        borders: countryResponse.data.borders,
      };
    })

    const newCounties = await Promise.all(promises);
    setCountries(newCounties);
  }, []);

  useEffect(() => {
    fetchCountry().catch(console.error);
  }, [fetchCountry]);

  console.log(countries)
  return (
    <div>hi</div>
  );
}

export default App;
