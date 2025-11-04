import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Competitive from "./components/Competitive";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function SectionPlaceholder({id, title, children}){
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div>{children ?? <p>Content will go here.</p>}</div>
    </section>
  );
}

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Research/>
        <Competitive />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
