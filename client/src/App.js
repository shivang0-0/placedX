import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
