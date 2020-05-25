import React from 'react';
import './App.css';
import UrlForm from './components/UrlForm'
import logos from './logo.png'


function Url_service() {
  return (
    <div className="App">
      <header className="App-header">

<p className = "Heading">
          Shorten-ly
          <t className = "H">
                  URL shortening service 
          </t>

</p>

      <img className = "App-logo"src={logos} alt="logo" />

  <UrlForm className = "Copy" > </UrlForm>

      </header>


    </div>
  );
}

export default Url_service;
