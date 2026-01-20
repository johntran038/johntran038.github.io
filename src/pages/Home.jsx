import React, { useState } from "react";
import useResponsive from "../hooks/useResponsive";
import Project from "../components/ProjectComponents/Project";

const Home = () => {

    const { tune } = useResponsive();
    // bg:green-200/x/blue-100/red-200
    // bg:xsm:green-200/blue-100/red-200
    // tune("bg:green-200/x/x/red-200");
    // tune("bg:green-200/blue-100/x/red-200");
    // tune("bg:xml:green-200/blue-100/red-200");

    const screenGlowEffect=`
        bg-[#141324]
        shadow-[inset_0_0_30px_rgba(67,67,117,0.9)]
    `

    return (
        <div className={`flex items-start bg-gray-900`}>
            <div className="w-70 bg-gray-900 text-white p-6" style={{position:"sticky", top:"20px"}}>
                <h2 className="font-semibold text-2xl">John Tran</h2>
                    <h3 className="text-md text-gray-400 mb-3">Software Developer</h3>
                <nav className="flex flex-col gap-2 text-lg">
                    <a href="#" className="hover:text-gray-300">Projects</a>
                    <a href="#" className="hover:text-gray-300">About Me</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>
            <div className={`${screenGlowEffect} w-full`}>
                <div className="flex flex-col items-center justify-center py-5 text-white">
                    <h2 className="text-5xl mb-2">John Tran</h2>
                    <h3 className="text-lg">Web & Game Developer</h3>
                </div>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-wrap p-3 justify-items-center">
                    <Project
                        title="Airline Safety Informant"
                        image="airline-info"
                        desc="A project made in Web Development that filters through an api to access crime data. It is a vital resource for community safety and a tool for research."
                        coverDetails={{alt: "air plane by Rafi Al Hakim"}}
                        // air plane by Rafi Al Hakim from <a href="https://thenounproject.com/browse/icons/term/air-plane/" target="_blank" title="air plane Icons">Noun Project</a> (CC BY 3.0)
                    />
                    <Project
                        title="Purified"
                        image="purified"
                        desc="A game that addresses awareness on the lack of clean water and teaches the player methods to solve this issue."
                    />
                    <Project
                        title="St. Paul Crime Database Explorer"
                        image="crime-data"
                        desc="A project made in Web Development that filters through an api to access crime data. It is a vital resource for community safety and a tool for research."
                    >
                        <p>
                            A rhythm game is controlled by a light sensor and turning a knob. There are two versions:<br />
                            One is coded in <a href="https://github.com/johntran038/Rhythm-Swipe_Processing" target="_blank">Java using Processing</a><br />
                            The other is coded in <a href="https://github.com/FrancisTR/Rhythm-Swipe" target="_blank">JavaScript using p5.js</a>
                        </p>
                    </Project>
                    <Project
                        title="Rhythm Swipe"
                        image="rsp"
                        desc="A version of “Rhythm Swipe” that is written in Processing Using Java for the Creative Coding Exhibition at University of St. Thomas. The goal of this project is to inspire a future generation of individuals with a passion for creative expression and programming."
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;