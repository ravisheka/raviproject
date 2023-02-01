import React from 'react';
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import ContactMe from './routes/ContactMe';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Project' element={<Project />}/>
        <Route path='/ContactMe' element={<ContactMe />}/>
      </Routes>
    </>
  );
}

export default App;
