import React from 'react'

export const CountryCard = ({data,isRemoveBtn}) => {
    console.log(data);
  return (
    <div className='country-card-container'>
        <p className='country-name'>{data?.countryName}</p>
        <p className='country-currency'>{data?.currency}</p>
        {
            isRemoveBtn &&
            <button>REMOVE</button>

        }
    </div>
  )
}
