import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
// import Home from './Pages/Home'; 


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />}/>
        <Route path="signup" element={<Signup />}/>        
      </Routes>
    </Router>
  );
}

export default App;
