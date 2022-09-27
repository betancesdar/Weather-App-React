import React from 'react'
import '../App.css'
import { useEffect, useState } from 'react'

const WeatherCard = ({weather,temp}) => {
    const [isCelcius, setisCelcius] = useState(true)

    const changeTemp = () => setisCelcius(!isCelcius)

    console.log(weather)
  return (
   <article className='card'>
   <h1 className='card_title'>Weather App</h1>
   <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
   <section className='card_first-section'>
        <img className='card_icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=''/>
   </section>
   <section className='card_second-section'>
        <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
        <ul className='second_list'>
            <li className='second_item'><span className='second_span'>Wind Speed: </span>{weather?.wind.speed} m/s</li>
            <li className='second_item'><span className='second_span'>Clouds: </span>{weather?.clouds.all} %</li>
            <li className='second_item'><span className='second_span'>Pressure: </span>{weather?.main.pressure} hPA</li>
        </ul>
   </section>
   <h2 className='card_temp'>{isCelcius ? `${temp?.celcius} °C` : `${temp?.fah} °F` }</h2>
   <button className='card_btn' onClick={changeTemp}>{isCelcius ? 'Change to °F' : 'Change to °C'}</button>
   </article>
  )
}

export default WeatherCard
