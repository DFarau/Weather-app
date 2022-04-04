import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
 return (
   <div className="App mx-auto mt-5 border border-dark container">
     <main>
       <Forecast />
     </main>
   </div>
 );
}

export default App;
