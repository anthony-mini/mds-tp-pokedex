import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error, Home } from '../pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Home />) as React.ReactNode} />
        <Route path="*" element={(<Error />) as React.ReactNode} />
      </Routes>
    </Router>
  );
}

export default App;
