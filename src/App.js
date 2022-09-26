import './App.css';
import Landing from './components/Landing/LandingPage';
import Home from './components/DataStructure/Home';
import Algorithm from './components/Algorithms/Algorithm';
import Libraries from './components/In-Built-Libraries/Libraries';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route exact path='/' element={<Landing heading1="Data Structure" heading2="Algorithms" heading3="Built-In Libraries" link1="ds" link2="algo" link3="lib"/>} />
          <Route path='ds' element={<Home/>} />
          <Route exact path='/algo' element={<Algorithm link=""/>} />
          <Route exact path='/lib' element={<Libraries link=""/>} />      
        </Routes>
      </Router>
    </>
  );
}

export default App;
