// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import React from 'react';
import ProjectGallery from './projectGallery/projectGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
