import React, {useState, useEffect } from 'react';
import thunder from "../../thunder.jpg"
function News() {
  return (
    <div className='news_container'>
      <img src= {thunder} className="news_image" height = {240} width={240} style={{borderRadius:"1rem"}}/>
      <div className='er' style={{fontWeight:"bold",justifyContent:"center"}}>Thunder Strke
      <div>Delhi</div>
      </div>
    </div>
  );
}

export default News;
