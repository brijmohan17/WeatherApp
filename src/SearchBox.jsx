import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ update }){
    const [city,setCity]=useState("");
    const [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="854565a612835d02b77ba54949cd7b35";
    
    let getWeatherInfo=async ()=>{
        try {
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temperature:jsonResponse.main.temp,
                Minimum_temperature:jsonResponse.main.temp_min,
                Max_temperature:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feels_like:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
            
        } catch (err) {
            throw  err;
        }
       
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try {
            evt.preventDefault();
            setError(false)
            console.log(city);
            setCity("");
            let newinfo= await getWeatherInfo();
            update(newinfo);
        } catch (err) {
            setError(true)
        }
       
    }
    return(
      <div className='SearchBox'>
        
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br />
            <br />
            <Button variant="contained" type='submit' >Search</Button>
            {error && <p  style={{margin:"10px ",color:"red"}} >
            There is no city with this name {city} in our API !
        </p>}
        </form>
        
      </div>  
    ) 
}