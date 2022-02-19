import useForecast from '../hooks/useForecast';
import Context from "../context";
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Weather from './Weather';
function Dashboard()
{
    const [city,setCity]=useState('');
    const {forecast, submitRequest } = useForecast();
    let navigate=useNavigate();
    function onLogout()
    {
        localStorage.clear()
        navigate('/')
    }
    function onSubmit(e)
    {
      e.preventDefault();
      submitRequest(city)
      setCity('')
    }
    if(forecast!=null)
    {
      return(
        <div >
          <div className=" grid container ">
             <button onClick={onLogout}  className="fluid ui button blue">Logout</button>
          </div>
          <div className="grid container ">
              <h2>Weather Forecast</h2>
          </div>
          <div className="grid container ">
              <h3>Get All Your Essential Weather Data For A Specific Location</h3>
          </div>
          <div className="container">
            <form>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <input type="text" placeholder='city name' value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
              </div>
              <div className="field">
              <button onClick={onSubmit} className="fluid ui button blue">Get Details</button>
              </div>
              <div className="grid container ">
              <h3>Temperature </h3>
          </div>
            </div>
          </form>
           <Context.Provider value={{forecast}}> 
           <Weather/>
           </Context.Provider>
        </div>
        </div>
        )
    }
    else{
      return(
        <div >
          <div className=" grid container ">
             <button onClick={onLogout}  className="fluid ui button blue">Logout</button>
          </div>
          <div className="grid container ">
              <h2>Weather Forecast</h2>
          </div>
          <div className="grid container ">
              <h3>Get All Your Essential Weather Data For A Specific Location</h3>
          </div>
          <div className="container">
            <form>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <input type="text" placeholder='city name' onChange={(e)=>{setCity(e.target.value)}} required/>
              </div>
              <div className="field">
              <button onClick={onSubmit} className="fluid ui button blue">Get Details</button>
              </div>
              <div className="grid container ">
              <h3>Temperature </h3>
          </div>
            </div>
          </form>
        </div>
        </div>
        )

    }
   
}
export default Dashboard;