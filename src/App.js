// import React from 'react';
import './App.css';
import img2 from './img2.jpg';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
    <div className="title"> 
      <h1>Safa Ben Jemaa</h1>
    </div>


<img style={{width:500, margin:50}} src= "./img1.jpg" alt="Informatique1"/>
<img style={{width:400 , margin:50 }} src={img2} alt="Informatique2" />


<ReactPlayer style={{marginLeft:450}} className="sequence" url='https://youtu.be/9qY-UYjvP0s' />

  
    </div>
  );
}

export default App;
