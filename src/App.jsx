import React from "react";
import Top from "./components/top";
import Navbar from "./components/navbar"
import Active from "./components/active"
import Hero from "./components/hero"
import Process from "./components/process"
import Refer from "./components/refer"
import Footer from "./components/footer"

export default function App() {
  return (
    <div>
      <Top/>
      <Navbar/> 
      <br />
      <Active/>
      <br />
      <br />
      <Hero/>
      <br /> <br />
      <Process/>
      <Refer/>
      <Footer/>
      
    </div>
  );
}

