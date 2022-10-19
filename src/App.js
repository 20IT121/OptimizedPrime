import './App.css';
import Landing from './components/Landing/LandingPage';
import Ds from './components/DataStructure/Ds'
import Algorithm from './components/Algorithms/Algorithm';
import Libraries from './components/In-Built-Libraries/Libraries';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route exact path='/' element={<Landing heading1="Data Structure" heading2="Algorithms" heading3="Built-In Libraries" link1="ds" link2="algo" link3="lib"/>} />
          <Route exact path='ds' element={<Ds />} />
          <Route exact path='algo' element={<Algorithm />} />
          <Route exact path='lib' element={<Libraries />} />      
        </Routes>
      </Router>
    </>
  );
}

export default App;
