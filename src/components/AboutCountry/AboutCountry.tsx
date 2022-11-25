import React from 'react';
import {MoreAboutCountry} from "../../types";

interface Props{
  country: MoreAboutCountry | null;
}

const AboutCountry: React.FC<Props> = ({country}) => {

  const countryBorders = () => {

    if (country) {
      if(country.borders.length > 0) {
        return country.borders.map(border => (
          <p key={border}>{border}</p>
        ))
      } else {
        return <h5 className='bg-danger opacity-75'>There is no border</h5>
      }
    }
  };

  return country ? (
    <div>
      <div className='d-flex border border-danger justify-content-between p-2' style={{height: '150px'}}>
        <div>
          <h4 className='bg-warning'>Country: {country.name}</h4>
          <p className='bg-info bg-opacity-50'>Capital: {country.capital}</p>
        </div>
        <div>
          <img src={country.flag} alt={country.name} style={{width: '100px'}}/>
        </div>
      </div>
      <h4 className='pt-2'>Borders:</h4>
      {countryBorders()}
    </div>
  ) : (
    <div className='text-center'>
      <img
        src="https://as2.ftcdn.net/v2/jpg/03/52/25/07/1000_F_352250738_kgoX0Er0NRXZcayo3XQopBPhj6oMlonM.jpg"
        alt="world-map"
        style={{width: '500px', height: 'auto'}
        }/>
      <h2 className='bg-info p-2 mt-1'>&lArr; Choose Country</h2>
    </div>
  );
};

export default AboutCountry;