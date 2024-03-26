import React from "react";
import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Resume () {
    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer offset={0} speed={1.5}>
                    <section>
                        <h2>Experiences</h2>
                        <p>My work history lies mainly in industrial manufacturing and quality assurance, however my most recent experience in the bootcamp has broadened my horizons in the tech sphere.</p>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5}>
                    <section>
                        <h2>Skills</h2>
                        <p>My work history lies mainly in industrial manufacturing and quality assurance, however my most recent experience in the bootcamp has broadened my horizons in the tech sphere.</p>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5}>
                    <section>
                        <h2>Experiences</h2>
                        <p>My work history lies mainly in industrial manufacturing and quality assurance, however my most recent experience in the bootcamp has broadened my horizons in the tech sphere.</p>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5}>
                    <section>
                        <h2>Projects - Expanded</h2>
                        <Parallax pages={6}>
                            <ul>
                            <ParallaxLayer offset={0} speed={1.5}>
                                <li>
                                    <h3>SQL Based CMS Application</h3>
                                    <p>This project was created with the intent of testing SQL functionality, however, it can also be applied and utilized in a commerical setting as well. For this application, I focused on creating relational data and create calling functions that displayed the desired information.</p>
                                </li>
                                <li>
                                    <h3>Project 2</h3>
                                    <p>Project 2 description</p>
                                </li>
                                <li>
                                    <h3>Project 3</h3>
                                    <p>Project 3 description</p>
                                </li>
                                <li>
                                    <h3>Project 4</h3>
                                    <p>Project 4 description</p>
                                </li>
                                <li>
                                    <h3>Project 5</h3>
                                    <p>Project 5 description</p>
                                </li>
                                <li>
                                    <h3>Project 6</h3>
                                    <p>Project 6 description</p>
                                </li>
                            </ParallaxLayer>
                            </ul>
                        </Parallax>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}