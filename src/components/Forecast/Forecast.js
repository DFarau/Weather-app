import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
    const uriEncodedCity = encodeURIComponent(city);

    

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?lang=fr&units=metric&q=${uriEncodedCity}`,{
        "method": "GET",
        "headers": {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': '24c943ba36msh0b8a458f9e3fddfp1ad8e5jsna63318204ee3'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
}

    return (
        <div>
            <h2>Recherchez une ville</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    className="form-control mt-4"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />

                <button className="btn btn-primary mt-4" type="submit">Rechercher</button>
            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
        </div>
    )
}

export default Forecast;

