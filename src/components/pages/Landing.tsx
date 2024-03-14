// Native React App Imports
import React from "react";
import { useState, useEffect } from "react";
// import "./App.css";

// Package Imports
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Component Imports
import Header from "../header.js";
import Modal, { toggleModal } from "../Modal.tsx";
import Typewriter from "../typewriter.js";
import Carousel from "../Carousel/Carousel.tsx";

// Parallax Image Imports
import Saturn from "../../assets/photos/transparent-saturn-representation-of-orange-saturn-with-golden-ring65c9afa0bbe055.4840335117077165127696.png";
import Earth from "../../assets/photos/earth-png-25631.png";
import Scene from "../../assets/photos/transparent-waterfall-rocks-waterfall-moonlit-forest-in-black-and-whit65cdc4dcc41494.0385456317079840928032.png";
import Follower from "../../assets/photos/5Mz4.gif";

//Carousel Image Imports
import cmsProject from "../../assets/photos/project-images/cmsrunning.png";
import passGen from "../../assets/photos/project-images/password-gen.png";
import workDay from "../../assets/photos/project-images/workday.png";
import finisNoctis from "../../assets/photos/project-images/finis.png";
import marvelData from "../../assets/photos/project-images/marvel.png";
import intStell from "../../assets/photos/project-images/interstellar-index.herokuapp.com_.png";

// Object for Carousel
const IMAGES = [
  {
    url: cmsProject,
    alt: "CMS Project",
    title: "CMS Project",
    desc: "This project was created with the intent to make a database with referential data-types. (Please note that this application runs locally)",
    link: "https://github.com/shaboon/silver-palm-tree",
  },
  {
    url: passGen,
    alt: "Randomized Password Generator",
    title: "Randomized Password Generator",
    desc: "With the application of regex, this application users can recieve a randomly generated password that follows their input.",
    link: "https://shaboon.github.io/expert-adventure-builtido/",
  },
  {
    url: workDay,
    alt: "Work/Task Planner",
    title: "Work Day Planner",
    desc: "The Work Day Planner application, can be used to track whatever tasks a user may want to complete timed with the hour of the day.",
    link: "https://shaboon.github.io/potential-guacamole/",
  },
  {
    url: finisNoctis,
    alt: "Mock Vacation - Reservation Site",
    title: "Project 1: Isle Finic Notis",
    desc: "As a starting project, this application was made as a team utilizing HTML5, CSS3, Bootstrap and JavaScript.",
    link: "https://shaboon.github.io/improved-happiness/",
  },
  {
    url: marvelData,
    alt: "Marvel Database",
    title: "Marvel Database",
    desc: "This application was created as my second team based project. Within this application, our own database was created where we made an application that could read and dynamically generate cards as the database grew or changed",
    link: "https://intense-savannah-08912.herokuapp.com/",
  },
  {
    url: intStell,
    alt: "Starwars Database",
    title: "InterStellar Index: A Star Wars Database",
    desc: "This was my final project, which had the same team as the Marvel Database. Within this project, we created an application that was capable of",
    link: "https://interstellar-index.herokuapp.com/",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App h-screen w-screen bg-blue-950 bg-gradient-to-b from-current to-indigo-950 grid grid-cols-5 grid-rows-5 gap-4">

      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="">
            <img src={Saturn} alt="Saturn Cartoon"></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={0.5}>
          <div className="p-5 text-5xl text-base-4 bg-gradient-to-r from-gray-950 to-transparent text-white">
            <code>
              <Typewriter text="console.log(Hello, My Name is Sean Haboon)" speed="50" />
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
            <section
              style={{
                maxWidth: "1200px",
                width: "100%",
                height: "500px",
              }}
              className=""
            >
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
            <button onClick={() => toggleModal("contact-info")}>
              Contact Me
            </button>
            <Modal label="contact-info">
              <Typewriter text="Email: shaboon.dev@gmail.com" speed="50" />
              <a href="https://github.com/shaboon">
                <button>Github</button>
              </a>
              <a href="https://www.linkedin.com/in/sean-haboon-6494501a7/">
                <button>LinkedIn</button>
              </a>
              <button onClick={() => toggleModal("contact-info")}>
                Get Back to Content
              </button>
            </Modal>
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
    </div>
  );
}

export default App;
