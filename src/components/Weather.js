import React, { useContext } from 'react';
import Context from "../context";
function  Weather (){
    const {forecast}=useContext(Context)
    return(
        <div className=" grid container ">
        <div >
            <h2 className="font-weight-bold mb-1">City Name:{'   '}{forecast.city}</h2>
            <h2 className="font-weight-bold mb-1">Temperature:</h2>
            <h2 className="font-weight-bold mb-1">Currently:{'   '}{forecast.temp}</h2>
            <h2 className="font-weight-bold mb-1">Min Temp:{'   '}{forecast.temp_min}</h2>
            <h2 className="font-weight-bold mb-1">Max Temp:{'   '}{forecast.temp_max}</h2>
            <h2 className="font-weight-bold mb-1">Feels Like:{'   '}{forecast.feels_like}</h2>
            <h2 className="font-weight-bold mb-1">Weather:</h2>
            <h2 className="font-weight-bold mb-1">Sunrise:{'   '}{forecast.sunrise}</h2>
            <h2 className="font-weight-bold mb-1">Sunset:{'   '}{forecast.sunset}</h2>
        </div>
        </div>

    )
   
}


export default Weather;