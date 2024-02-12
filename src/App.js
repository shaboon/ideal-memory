import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer";

import Portfolio from "./pages/portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App h-screen w-screen bg-black bg-gradient-to-t from-current to-gray-700 grid grid-cols-5 grid-rows-5 gap-4">
      <header className="App-header col-span-3 row-span-3 m-8">
        <h1 className="intro text-gray-200 text-5xl">
          <code className="underline">
            console.log("Hi, my name is Sean Haboon")
          </code>
        </h1>
      </header>

      <section className="row-span-2 col-start-5 row-start-3 m-8">
        <p className="text-gray-200 text-2xl">
          I am a full stack web developer with a passion for creating
          applications that are both functional and visually appealing. I am
          proficient in HTML, CSS, JavaScript, and React. I am also experienced
          in Node.js, Express, MySQL, and MongoDB. I am a quick learner and
          eager to expand my knowledge and skills.
        </p>
      </section>

      <Footer />

      <Router>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* // <Route path="/Resume" element={<Resume />} />
            // <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
