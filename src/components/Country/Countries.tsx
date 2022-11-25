import React from 'react';
import {GetCountry} from "../../types";
import Country from "./Country";
import './Countries.css'

interface Props{
  country: GetCountry[];
  onClick: (id: string) => void;
}

const Countries: React.FC<Props> = ({country,onClick,}) => {

  const emptyCountries = () => {
    if(country.length <= 0) {
      return (
        <div className="lds-circle">
          <div></div>
        </div>
      )
    }
  };

  return (
    <div className='border border-dark overflow-auto overflow-auto' style={{height: '500px', width: '400px'}}>
      {country.map(item => (
        <Country
         onClick={() => onClick(item.alpha3Code)}
         key={Math.random() * 99999}
         name={item.name}
       />
      ))}
      {emptyCountries()}
    </div>
  );
};

export default Countries;