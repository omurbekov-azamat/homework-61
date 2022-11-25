import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {GetCountry} from "../types";
import CloseCountry from "../components/CloseCountry/CloseCountry";
import Countries from "../components/Country/Countries";

const baseUrl = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

function App() {
  const [countries, setCountries] = useState<GetCountry[]>([]);
  const [selectCountryBorders, setSelectCountryBorders] = useState<string | null >(null);

  const fetchCountry = useCallback(async () => {
    const countriesResponse = await axios.get<GetCountry[]>(baseUrl)
    setCountries(countriesResponse.data);
  }, []);

  useEffect(() => {
    fetchCountry().catch(console.error);
  }, [fetchCountry]);

  return (
    <div className='d-flex container justify-content-center mt-5'>
        <Countries country={countries} onClick={setSelectCountryBorders}/>
      <div className='border-dark border bg-danger bg-opacity-50 p-2' style={{width: '600px'}}>
        <CloseCountry alpha3Code={selectCountryBorders}/>
      </div>
    </div>


  );
}

export default App;
