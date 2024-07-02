import React from 'react'
import { CountryCard } from './CountryCard'

export const CompareArea = () => {
    const list=[
        {country:"india",currency:"$1=INR 85"},
        {country:"QATAR",currency:"$1=INR 85"},
      

    ]
  return (
    <div className='country-list-container'>
    <p>Compare</p>
     {
        list?.map((r,i)=>(
            <CountryCard data={r}/>
        ))
     }
</div>
  )
}
