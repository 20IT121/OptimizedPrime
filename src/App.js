import './App.css';
import Home1 from './components/Home1';
import Home2 from './components/Home2';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route exact path='/' element={<Home1 />} />
          <Route exact path='/home2' element={<Home2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
