import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import CardGroup from "./components/cardlist";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CardGroup />
      <Footer />
    </div>
  );
}

export default App;
