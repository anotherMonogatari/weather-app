import React from 'react'

export default function InputComponent(props) {
  return (
    <form className='form' onSubmit={props.getDataFromAPI}>
      
      <div className="label">
        <label>Enter a city:
          <input type="text" name="city" placeholder="Kyiv"/>
        </label>
      </div>

      <br/>

      <button type="submit">Check!</button>

    </form>  
  )
}
