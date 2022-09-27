import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temp, settemp] = useState()
  
  

 useEffect(() => {
  const success = pos => {
  const obj = {
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  }
   setcoords(obj)
 }
  navigator.geolocation.getCurrentPosition(success)
 }, [])
 
  
 console.log(coords)

 useEffect(()=>{
  if(coords){
    const KEY = '37238fdbfc00f947f7a6291595bf8faf'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}`
    axios.get(URL)
      .then(res => {
        const celcius = (res.data.main.temp - 273.15).toFixed(1)
        const fah = (celcius * 9 / 5 + 32).toFixed(1)
        settemp({celcius,fah})
        setweather(res.data)
      })
      .catch(err => console.log(err))
  }

},[coords])

  return (
    <div className="App">
    {
      weather ? 
      <WeatherCard weather={weather} temp={temp}/>
      :
      <Loading/>
    }
      
    </div>
  )
}

export default App
