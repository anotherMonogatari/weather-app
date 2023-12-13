import React, { Component } from 'react';

import './main.scss'

import InputComponent from './components/InputComponent'
import DataComponent from './components/DataComponent'

class App extends Component {
  state = {
    data: {},
    isLoading: false,
    emptyInput: false,
    error: null
  }

  getDataFromAPI = (e) => {
    e.preventDefault()
    
    const city = e.target.city.value

    if (city) {
      this.setState({
        isLoading: true, emptyInput: false
      })

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b4ac2787db89d7d853ec394b289dce59&units=metric`)
      .then(response => {
       if(response.ok) { return response.json() }
       else {
         throw new Error()
       }
      })
      .then(data => this.setState({ error: null, data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
    } else {
      this.setState({
        emptyInput: true, data: {}
      });
    }
  }

  render() {
    return (
     <div>
        
        <h1 className='title'>Weather_checker <img className='sun' src="./sun.svg" alt="rotating sun icon"/></h1>

        <InputComponent getDataFromAPI={this.getDataFromAPI}/>

        {(this.state.data.base && !this.state.emptyInput &&
           !this.state.isLoading && !this.state.error) && 
           <DataComponent data={this.state.data}/>}
        
        {(this.state.isLoading) && 
          <div className='load'>
            <b>Loading...</b>
          </div>}
        
        {(this.state.emptyInput) && 
          <div className='load'>
            <b>Inputs are empty.</b>
          </div>}

        {(this.state.error && !this.state.isLoading && !this.state.emptyInput) && 
          <div className='load'>
            <b>City not found.</b>
          </div>}
        
      </div>
    );
  }
}

export default App;
