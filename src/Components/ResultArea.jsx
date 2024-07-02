import React from 'react'
import { CountryCard } from './CountryCard'

export const ResultArea = () => {
    const list=[
        {country:"india",currency:"$1=INR 85"},
        {country:"QATAR",currency:"$1=INR 85"},
      

    ]
  return (
    <div className='country-list-container'>
    <p>Result(High To Low)</p>
     {
        list?.map((r,i)=>(
            <CountryCard data={r}/>
        ))
     }
</div>
  )
}
