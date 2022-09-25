import './App.css';
import Landing from './components/Landing/LandingPage';
import Home from './components/DataStructure/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route exact path='/' element={<Landing heading1="Data Structure" heading2="Algorithms" heading3="Built-In Libraries" link1="ds" link2="algo" link3="lib"/>} />
          <Route exact path='/ds' element={<Home heading1="Linear Data Structure" heading2="Non-Linear Data Structure" heading3="Not-sure" link=""/>} />
          <Route exact path='/algo' element={<Home link=""/>} />
          <Route exact path='/lib' element={<Home link=""/>} />      
        </Routes>
      </Router>
    </>
  );
}

export default App;
