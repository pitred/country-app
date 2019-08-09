import React from 'react';

const CountryDetails = props => (
   <div className='country-wrapper'>
      <header>
         <img src={props.country.imageUrl} alt='country' className='country-photo' />
      </header>
      <div className='country-info'>
         <h1>{props.country.name}</h1>
         <h2>Continent: {props.country.continent}</h2>

         <div className='info'>
            <div>
               <span>{props.country.populace}</span>
               <span>Pop [mln] </span>
            </div>

            <div>
               <span>{props.country.capital}</span>
               <span>Capital</span>
            </div>

            <div>
               <span>{props.country.currency}</span>
               <span>Currency</span>
            </div>
         </div>
      </div>
   </div>
);

export default CountryDetails;
