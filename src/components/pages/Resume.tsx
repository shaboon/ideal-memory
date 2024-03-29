import React from "react";
import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Resume () {
    return (
        <div className="text-white">
            <Parallax pages={1.2}>
                <ParallaxLayer offset={0} speed={1.5}>
                    <section className="bg-black">
                        <h2 className="">Experiences</h2>
                        <p>My work history lies mainly in industrial manufacturing and quality assurance, however my most recent experience in the bootcamp has broadened my horizons in the tech sphere.</p>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={1.5}>
                    <section className="bg-black">
                        <h2 className="">Skills</h2>
                        <p>My work history lies mainly in industrial manufacturing and quality assurance, however my most recent experience in the bootcamp has broadened my horizons in the tech sphere.</p>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={0.4} speed={1.5}>
                    <section className="bg-black">
                        <h2 className="">Projects - Expanded</h2>
                            <ul className="projectList bg-black m-2">
                                <li>
                                    <h3 className="">SQL Based CMS Application</h3>
                                    <p className="">This project was created with the intent of testing SQL functionality, however, it can also be applied and utilized in a commerical setting as well. For this application, I focused on creating relational data and create calling functions that displayed the desired information.</p>
                                </li>
                                <li>
                                    <h3 className="">Password Generator</h3>
                                    <p className="">This Project mainly focused on using regex to randomly generate secure passwords.</p>
                                </li>
                                <li>
                                    <h3 className="">Work Day Task Tracker</h3>
                                    <p className="">By utilizing native unix time functions, I was able to create an application that tracks the user's current time and save what tasks they desire to achieve locally on their computer.</p>
                                </li>
                                <li>
                                    <h3 className="">Isle Finis Notics</h3>
                                    <p className="">This application was made in both parody and as an exercise for teamwork. Within the project, both Bootstrap and custom CSS was applied in creating a HTML5 based application. Javscript was used to capture user-inputted data and stored locally.</p>
                                </li>
                                <li>
                                    <h3 className="">Marvel Database</h3>
                                    <p className="">With handlebars.js and Bootstrap, this application pulls data from our own database and displays information.</p>
                                </li>
                                <li>
                                    <h3 className="">Interstellar Index</h3>
                                    <p className="">Applying React.JS, this application uses multiple pages to display information, from our own database, about Star Wars. The intention as a team was to find a way to make an application that makes following a single character's story much easier.</p>
                                </li>
                            </ul>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}