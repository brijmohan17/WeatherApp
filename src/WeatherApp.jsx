import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temperature:23.78,
        Minimum_temperature:18.23,
        Max_temperature:34.45,
        humidity:56,
        feels_like:23.34,
        weather:"haze"
    })

    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            
            <h2>My Weather App</h2>
            <SearchBox update={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}