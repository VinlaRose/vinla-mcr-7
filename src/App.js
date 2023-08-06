
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Continents } from './Pages/Continents';
import { Countries } from './Pages/Countries';
import { Destinations } from './Pages/Destinations';
import { SindleDestination } from './Pages/SingleDestination';

function App() {
  return (
    <div className="App">
      
        <h1>Trip Advisor</h1>
        <Routes>
          <Route path="/" element={<Continents/>} />
          <Route path="/:continent" element={<Countries/>} />
          <Route path="/:continent/:country" element={<Destinations/>} />
          <Route path="/:continent/:country/:destination" element={<SindleDestination/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
