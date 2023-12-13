import React from 'react'

export default function DataComponent(props) {
  return (
    <div className='content'>

      <p className='temp'><b>{props.data.main.temp.toFixed(1)}</b> &deg;</p>

      <p><b>{props.data.name}</b>, <b>{props.data.sys.country}</b></p>
      
      <p><b>{props.data.weather[0].main}</b></p>
      
      <p>Humidity: <b>{props.data.main.humidity}</b> %</p>
      
    </div>
  )
}
