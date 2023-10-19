import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leo } from './Manoj/Leo';
import { Tablet } from './rosan/Chatgpt';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Leo />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
