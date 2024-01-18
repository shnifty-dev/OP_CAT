// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home  from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/OP" element={<Home />} />
      <Route path="/CAT" element={<Home />} />
      <Route path="/OP_CAT" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;