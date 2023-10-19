import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leo } from './Manoj/Leo';
import { Interaction } from './Arul/Interaction';
import { Tshirt } from './Arul/Tshirt';
import { NEWARRIVALS, Newarr } from './Arul/NEWARRIVALS';

import { Tablet } from './rosan/Chatgpt';


import { Design } from './Sivakumar/Design';
import { Nav } from './Sivakumar/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Leo />} />
          



          <Route path="/Nav" element={<Nav />} />
          


        </Routes>
      </Router>
    </div>
  );
}

export default App;
