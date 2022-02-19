import { useState } from 'react';
import axios from 'axios';
const useForecast = () => {
    const [forecast,setForecast]=useState(null);
    const getData = async location => {
        const  response = await axios(`${process.env.REACT_APP_FORECAST_API_URL}?q=${location}&appid=${process.env.REACT_APP_API_KEY}`);
        if (!response || response.length === 0) {
            return;
        }
        return response.data[0];
    };

    const getForecastData = async data => {
        const lat=data.lat;
        const lon=data.lon;
        const  response  = await axios(`${process.env.REACT_APP_DATA_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);
        if (!response || response.length === 0) {
            return;
        }
        return response;
    };
    const gatherForecastData = response => {
        const forecast={}
        forecast['city']=response.data.name;
        forecast['temp']=response.data.main.temp;
        forecast['temp_min']=response.data.main.temp_min;
        forecast['temp_max']=response.data.main.temp_max;
        forecast['feels_like']=response.data.main.feels_like;
        forecast['sunrise']=response.data.sys.sunrise;
        forecast['sunset']=response.data.sys.sunset;
        setForecast(forecast);
    };

    const submitRequest = async location => {
        const response = await getData(location);
        if(!response) return;
        const data = await getForecastData(response);
        if (!data) return;
        gatherForecastData(data);
    };

    return {
        forecast,
        submitRequest,
    };
};


export default useForecast;