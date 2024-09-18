import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Katie from "./images/katie-zaferes.png";
import data from "./data";

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
    />
    )
  } )

  return (
    <>
    <Hero />
    <Navbar />
    <section className="cards-list">
      {cards}
    </section>
    
    </>
  );
}

export default App;
