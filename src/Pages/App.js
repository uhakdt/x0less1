import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Archive from './Pages/Archive';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ListX from './Pages/ListX';

import Post1 from './Pages/Posts/Post1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/listX" element={<ListX />} />

        <Route path="/post1" element={<Post1 />} />
      </Routes>
    </BrowserRouter>
  );
}