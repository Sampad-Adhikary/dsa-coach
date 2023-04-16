import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
