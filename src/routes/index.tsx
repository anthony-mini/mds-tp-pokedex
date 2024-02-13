import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error, Home, PokemonDetail } from '../pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Home />) as React.ReactNode} />
        <Route path="*" element={(<Error />) as React.ReactNode} />
        <Route
          path="/pokemon/:id"
          element={(<PokemonDetail />) as React.ReactNode}
        />
      </Routes>
    </Router>
  );
}

export default App;
