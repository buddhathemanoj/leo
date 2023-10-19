import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leo } from './Manoj/Leo';
import { Brand } from './Mathik/Brand';
import { Interaction } from './Arul/Interaction';
import { NEWARRIVALS } from './Arul/NEWARRIVALS';
import { Tshirt } from './Arul/Tshirt';
import { Branding } from './Bala/Branding';
import { Blockchain } from './Prabhu/Blockchain';
import { Design } from './Renuka/Design';
import { Tablet } from './rosan/Chatgpt';
import { Designn } from './Sivakumar/Design';








function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Leo />} />

          <Route path="/brand" element={<Brand />} />
          <Route path="/Interaction" element={<Interaction />} />
          <Route path="/Tshirt" element={<Tshirt/>} />
          <Route path="/NEWARRIVALS" element={<NEWARRIVALS/>} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/Design" element={<Design/>} />
          <Route path='/chatgpt'element={<Tablet />}></Route>
          <Route path="/Design" element={<Designn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
