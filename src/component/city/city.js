import React, {useState, useEffect } from 'react';
import c from "../../../src/bg1.jpg"
import "./city.css"
function City(props) {
  return (
    <div className='contain'>
        <div className='image'>
            <div className='condition'>
                <img src={props.img} height={200} width={200}/>
                <span>Thunder</span>
            </div>
        </div>
        <div className='info'>
            <div className='temprature_'>
                24
            </div>
            <div className='detail'>
                <div className='city_name'>
                    Delhi
                </div>
                <div className='full_date'>
                    9/03/2023
                </div>
            </div>
        </div>
    </div>
  );
}

export default City;
