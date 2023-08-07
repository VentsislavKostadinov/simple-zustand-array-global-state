import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contacts } from "./Contacts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
  </BrowserRouter>
  );
}
