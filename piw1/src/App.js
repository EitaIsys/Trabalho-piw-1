import React from 'react';
import NavegadorSuperior from './Components/NavegadorSuperior';
import './App.css';
import GaleriaPost from './Components/Galeria';

function App() {
  return (
    <div className="App">
      <NavegadorSuperior></NavegadorSuperior>
      <GaleriaPost></GaleriaPost>
    </div>
  );
}

export default App;
