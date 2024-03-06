// Native React App Imports
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

// Package Imports
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Header from "./components/header";
import Modal, { toggleModal } from "./components/Modal.tsx";
import Typewriter from "./components/typewriter";
import Carousel from "./components/Carousel/Carousel.tsx";

// Parallax Image Imports
import Saturn from "./assets/photos/transparent-saturn-representation-of-orange-saturn-with-golden-ring65c9afa0bbe055.4840335117077165127696.png";
import Earth from "./assets/photos/earth-png-25631.png";
import Scene from "./assets/photos/transparent-waterfall-rocks-waterfall-moonlit-forest-in-black-and-whit65cdc4dcc41494.0385456317079840928032.png";
import Follower from "./assets/photos/5Mz4.gif";

//Page Imports
import Portfolio from "./pages/portfolio";

//Carousel Image Imports
import cmsProject from "./assets/photos/project-images/cmsrunning.png";
import passGen from "./assets/photos/project-images/password-gen.png";
import workDay from "./assets/photos/project-images/workday.png";
import finisNoctis from "./assets/photos/project-images/finis.png";
import marvelData from "./assets/photos/project-images/marvel.png";
import intStell from "./assets/photos/project-images/interstellar-index.herokuapp.com_.png";

// Code for Carousel
const IMAGES = [
  cmsProject,
  passGen,
  workDay,
  finisNoctis,
  marvelData,
  intStell,
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App h-screen w-screen bg-blue-950 bg-gradient-to-t from-current to-indigo-950 grid grid-cols-5 grid-rows-5 gap-4">
      <Header />

      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="">
            <img src={Saturn} alt="Saturn Cartoon"></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={0.5}>
          <div className="p-5 text-5xl text-base-4 bg-gradient-to-r from-gray-950 to-transparent text-white">
            <code>
              <Typewriter text="console.log(Hello, My Name is Sean Haboon)" />
            </code>
            <button onClick={() => toggleModal("test-modal")}>o</button>
            <Modal label="test-modal">
              <h1>Test Modal</h1>
              <button onClick={() => toggleModal("test-modal")}>x</button>
            </Modal>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <div className="">
            <img
              src={Earth}
              alt="Vector cartoon space to earth background"
            ></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.0} speed={0.5}>
          <div className="p-5 text-right text-5xl text-base-4 bg-gradient-to-l from-gray-950 to-transparent text-white">
            <p>My Projects are cool</p>
            <section>
              <Carousel images={IMAGES} />
            </section>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.2}>
          <div className="w-screen">
            <img src={Scene} alt="Cartoon Waterfall and scene img"></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2}>
          <div className="p-5 text-lg bg-gradient-to-r from-gray-950 to-transparent text-white">
            <p className="text-2xl">Contact Me</p>
            <Typewriter text="Email: shaboon.dev@gmail.com" />
          </div>
        </ParallaxLayer>

        {/* Layer does not follow for the entire page, please refer to ref video for possible solution */}
        {/* Layer is also too high up on priority, taking up space for relevant information */}
        {/* <ParallaxLayer offset={0} factor={2} speed={2}>
          <div className="">
          <img src={Follower} alt="Fire gif"></img>
          </div>
        </ParallaxLayer> */}
      </Parallax>

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
