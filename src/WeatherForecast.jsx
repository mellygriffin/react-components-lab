import './WeatherForecast.css';

const WeatherForecast = (props) => {
    const { forecasts } = props
    return (
        <div className="weather">
            <h2>{forecasts.day}</h2>
            <img src={forecasts.img} alt={forecasts.imgAlt} />
            <p><span>conditions: </span>{forecasts.conditions}</p>
            <p><span>time: </span>{forecasts.time}</p>
        </div>
    )
}

export default WeatherForecast;