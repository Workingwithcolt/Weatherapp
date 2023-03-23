import React, {useState, useEffect } from 'react';
import City from  "../src/component/city/city"
import News from "../src/component/news/news"
import thunder from "../src/thunder.jpg"
import sunny from "../src/sunny.jpg"
import cloudy from "../src/cloudy.jpg"
import './App.css'
import s from "../src/earth.jpg"
import getData  from './api';
function App() {
  const[date,setDate] = useState("")
  const[time,setTime] =useState("")
  const[city,setCity] = useState("")
  const[day,setDay] = useState("")
  const[c,setC] = useState(null)
  const handleClick = async()=>{
    const temp = await getData(city)
    setC(temp)
    console.log(c)
  }
  const datetime = ()=>{
    var currentdate = new Date();
    setDate(currentdate.getDate() + "/"+(currentdate.getMonth()+1) + "/" + currentdate.getFullYear()) 
    setTime(currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds());
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    setDay(weekday[currentdate.getDay()])
    console.log(date+" ,"+time)
  }
  // datetime()
  const handlecity =async (e)=>{
    var {value} =e.target; 
    await setCity(value);
    console.log(c)
    datetime()
  }
  
  return (
    <div>
      <div className="container">
        <div className="nav">
            <div className="home co">
              Home
            </div>
            <div className="city co">
                cities
            </div>
            <div className="new co">
                News
            </div>
        </div>
        <div className="weather_detail">
          <div className='header co'>
            Weather Detail
          </div>
          <div className='weather_container'>
          <div>
          <div className='co'>
            cloudy
          </div>
          <div className='co'>
            Humidity            
          </div>
          <div className='co'>
            Wind
          </div>
          </div>
          <div>
          <div className='co'>
            {c == null ? 0 : c.clouds.all}%
          </div>
          <div className='co'>
            {c == null ? 0 :c.main.humidity}%
          </div>
          <div className='co'>
            {c == null ? 0 :c.wind.speed}km/h            
          </div>
          </div>
          </div>
        </div>
        <div className="location">
          <div className='temprature co'>
            {~~(c==null ? 0 : c.main.temp-273.15)}
          </div>
          <div className='location_at'>
            <h1>{city}</h1>
            <div className='date'>
              <div className='all_date'>
                {time == ""? "08:45" :time}
              </div>
              <div className='all_date'>
                {day == ""?"Thursday" : day}
              </div>
              <div className='all_date'>
                {date == "" ? "09/03/2023":date}
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="cities">
          <h1 style={{margin:'0 auto'}}>Cities</h1>
          <div className='blocks'>
            <City img ={thunder}/>
            <City img ={cloudy}/>
            <City img = {sunny}/>
          </div>
          <div className='Search'>
            <input className='input' value={city} onChange={handlecity} placeholder='Search city'/>
            <button  className= "search_button" onClick={handleClick}>
                Search
                </button>
          </div>
        </div>
        </div>
        <div className="earth">
          <img src ={s} className="magnify"/>
        </div>        
        <div className="news">
          <h2 style={{margin:'0 auto'}}>News</h2>
          <div className="_news_container">
          <News></News>
          <News></News>
          <News></News>
          </div>
        </div>
        <div className="footer">
          <div style={{fontWeight:"bold",color:'white'}} className='one_part'>
            WEATHERAPP
          </div>
          <div style={{fontWeight:"bold",color:'white'}} className='second_part'>
            <div className='first'>
              <li>Home</li>
              <li>Cities</li>
              <li>News</li>
            </div>
            <div className='second'>
            <li>Contact us</li>
              <li>FAQs</li>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
