import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Header from "./components/header";

import Saturn from "./assets/photos/transparent-saturn-representation-of-orange-saturn-with-golden-ring65c9afa0bbe055.4840335117077165127696.png";
import Scene from "./assets/photos/transparent-waterfall-rocks-waterfall-moonlit-forest-in-black-and-whit65cdc4dcc41494.0385456317079840928032.png";
import Follower from "./assets/photos/5Mz4.gif";

import Portfolio from "./pages/portfolio";

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
          <div className="text-5xl text-white">
            <code>console.log("Hello! My Name is Sean")</code>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1}>
          <div className="bg-black bg-gradient-to-t from-current to-gray-700">
            {/* <img
              src={Earth}
              alt="Vector cartoon space to earth background"
            ></img> */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.05} speed={1.2}>
          <div className="w-screen">
            <img src={Scene} alt="Cartoon Waterfall and scene img"></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2}>
          <div className="">
            <code>Hi, My Name is Sean Haboon</code>
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
