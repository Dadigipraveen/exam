
import './App.css';
import Navbar from './components/Navbar';
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from './components/All';
import Filter from './components/Filter';


function App() {
  return (
    <>
    {/* <BrowserRouter>
   <Routes>
     
     <Route path="/Navbar" element={<Navbar/>}/> 
    


     </Routes>
     </BrowserRouter>  */}
 
<Navbar/> 
<All/>

    </>
  );
}

export default App;
