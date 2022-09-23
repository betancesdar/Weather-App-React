import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()

  

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
      .then(res => setweather(res.data))
      .catch(err => console.log(err))
  }

},[coords])

console.log(weather)


  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  )
}

export default App
