import './App.css';
import React from 'react';
import Appbar from './Components/Appbar/Appbar';
import IndividualDomain from './Components/Individual/IndividualDomain';

function App() {

  return (
    <div>
      <Appbar user='John'/>
      <div className='content'>
        <IndividualDomain />      
      </div>
      
    </div>

  );
}

export default App;
