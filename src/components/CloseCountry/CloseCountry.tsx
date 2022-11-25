import React, {useCallback, useEffect, useState} from 'react';
import {MoreAboutCountry} from "../../types";
import axios from "axios";
import AboutCountry from "../AboutCountry/AboutCountry";

interface Props {
  alpha3Code: string | null;
}

const countryUrl = 'https://restcountries.com/v2/alpha/';

const CloseCountry: React.FC<Props> = ({alpha3Code}) => {
  const [country, setCountry] = useState<MoreAboutCountry | null>(null);

  const fetchBorder = useCallback(async (alpha3Code: string) => {

    const countryResponse = await axios.get<MoreAboutCountry>(countryUrl + alpha3Code);

    if (countryResponse.data.borders) {
      const promises = countryResponse.data.borders.map(async alpha3Code => {
        const borderCountries = await axios.get<MoreAboutCountry>(countryUrl + alpha3Code);
        return borderCountries.data.name;
      });

      const closeCountries = await Promise.all(promises);

      setCountry({
        flag: countryResponse.data.flag,
        name: countryResponse.data.name,
        capital: countryResponse.data.capital,
        borders: closeCountries,
      });
    } else {
      setCountry({
        flag: countryResponse.data.flag,
        name: countryResponse.data.name,
        capital: countryResponse.data.capital,
        borders: [],
      });
    }
  }, []);

  useEffect(() => {
    if (alpha3Code !== null) {
      fetchBorder(alpha3Code).catch(console.error);
    }
  }, [alpha3Code, fetchBorder]);

  return (
    <AboutCountry country={country}/>
  );
};

export default CloseCountry;