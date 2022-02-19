import React ,{useEffect}from 'react';
import Context from "../context";
import useForecast from '../hooks/useForecast';
import Weather from './Weather';
import {Link} from 'react-router-dom';
function  LandingPage ({city}) {
    const {forecast, submitRequest } = useForecast();
    useEffect(()=>{
        submitRequest(city)
    },[])
    if(forecast)
    {
        return (
            <div className="App">
                <div className=" container ">
                < Link to='/login'><button className="fluid ui button blue">Login</button></Link>
                </div>
                <div className="grid container ">
                <h2>Today's Weather</h2>
                </div>
                <Context.Provider value={{forecast}}> 
                <Weather/>
                </Context.Provider> 
            </div>
          );
    }
    else{
        return(
            <div className="App">
                <div className=" container ">
                < Link to='/login'><button className="fluid ui button blue">Login</button></Link>
                </div>
                <div className="grid container ">
                <h2>Today's Weather</h2>
                </div>
            </div>
            
        )
    }
  }


export default LandingPage;