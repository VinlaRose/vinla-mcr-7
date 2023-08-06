
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Continents } from './Pages/Continents';
import { Countries } from './Pages/Countries';

function App() {
  return (
    <div className="App">
      
        <h1>Trip Advisor</h1>
        <Routes>
          <Route path="/" element={<Continents/>} />
          <Route path="/:continent" element={<Countries/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
