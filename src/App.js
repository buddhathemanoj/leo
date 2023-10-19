import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leo } from './Manoj/Leo';
import { Brand } from './Mathik/Brand';









function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Leo />} />

          <Route path="/brand" element={<Brand />} />

          



        </Routes>
      </Router>
    </div>
  );
}

export default App;
