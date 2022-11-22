import React from 'react';
import {GetCountry} from "../../types";
import Country from "./Country";

interface Props{
  country: GetCountry[]
}

const Countries: React.FC<Props> = ({country}) => {
  return (
    <div>
      {country.map(item => {
       return <Country
         key={Math.random()}
         name={item.name}
       />
      })}
    </div>
  );
};

export default Countries;