import axios from 'axios'

export const countryListAPICall=(country)=>{
    axios.get(`https://restcountries.com/v3.1/name/${country}`)
    .then((res)=>{
        console.log(res?.data);
        localStorage.setItem("country",JSON.stringify(res?.data))
    })
    .catch((err)=>{
        console.log(err.response);
    })
}