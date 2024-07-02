import React, { useEffect, useState } from 'react'
import "./home.css"
import { CountryList } from './CountryList'
import { CompareArea } from './CompareArea'
import { ResultArea } from './ResultArea'
import { countryListAPICall } from './countryAPI'

export const Home = () => {
    const countryData=JSON.parse(localStorage.getItem("country"))
    let id = Math.random().toString(16).slice(2);
    const formValueInitial={
        _id:id,
        countryName:""
    }

    const [formValuse,setFormValues]=useState(formValueInitial)
    const [countryListFull,setCountryListFull]=useState([])
    
    const handleInputChange=(value)=>{
        setFormValues({...formValuse,countryName:value})
    }
     
    const addBtnFunction=()=>{
        setCountryListFull([...countryListFull,formValuse])
        countryListAPICall(formValuse?.countryName)
    }

   
    useEffect(() => {
        if (countryData !== undefined) {
            let filteredCountry = countryData.find((obj) => {
                return obj?.name?.common?.toUpperCase() === formValuse?.countryName?.toUpperCase();
            });
    
          
    
          
            if (filteredCountry) {

                if (!countryListFull.some(item => item.name.common === filteredCountry.name.common)) {
                    setCountryListFull((prevList) => [...prevList, filteredCountry]);
                }
            }
        }
    }, [countryData, formValuse.countryName, countryListFull, setCountryListFull]);



 
    console.log(formValuse);

  return (
    <div className='home-container'>
        <p>Machine Test</p>
        <div className='input-container'>
            <input 
              type="text"
              value={formValuse?.countryName}
              onChange={(e)=>handleInputChange(e.target.value)}
              />
            <button onClick={addBtnFunction}>ADD</button>
        </div>
        <div className='country-details'>
           <CountryList list={countryListFull}/>
           <CompareArea/>
           <ResultArea/>
        </div>
    </div>
  )
}
