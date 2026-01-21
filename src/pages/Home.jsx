import React, { useState } from "react";
import useResponsive from "../hooks/useResponsive";
import Project from "../components/ProjectComponents/Project";
import { tooltip } from "@material-tailwind/react";

const Home = () => {

    const [open, setOpen] = useState(false);

    const { tune } = useResponsive();
    // bg:green-200/x/blue-100/red-200
    // bg:xsm:green-200/blue-100/red-200
    // tune("bg:green-200/x/x/red-200");
    // tune("bg:green-200/blue-100/x/red-200");
    // tune("bg:xml:green-200/blue-100/red-200");

    const screenGlowEffect = `
        //bg-[#141324]
        shadow-[inset_0_0_30px_rgba(67,67,117,0.9)]
    `

    return (
        <div className={`flex bg-[#141324] text-white min-h-screen`}>
            <div className={`fixed min-h-screen z-10 ${open ? 'block' : 'hidden'} lg:block lg:static w-70 bg-gray-700 p-6`}>
                <h2 className="font-semibold text-2xl">John Tran</h2>
                <h3 className="text-md text-gray-400 mb-3">Software Developer</h3>
                <nav className="flex flex-col gap-2 text-lg">
                    <a href="#" className="hover:text-gray-300">Projects</a>
                    <a href="#" className="hover:text-gray-300">About Me</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>

            <div className={`${screenGlowEffect} fixed inset-0 w-full h-full z-2 pointer-events-none`} />
            <div className={`w-full`}>
                <div className={`${open ? 'blur-xs pointer-events-none' : ''}`}>
                    <div className={`bg-black fixed w-full h-full z-9 opacity-20 pointer-events-auto ${open?'block':'hidden'}`}
                        onClick={()=>setOpen(false)}
                    />
                    <div className="flex flex-col items-center justify-center py-5">
                        <h2 className="text-5xl mb-2">John Tran</h2>
                        <h3 className="text-lg">Web & Game Developer</h3>

                        <div className="xs:block sm:hidden">xs</div>
                        <div className="hidden sm:block md:hidden">small</div>
                        <div className="hidden md:block lg:hidden">medium</div>
                        <div className="hidden lg:block xl:hidden">large</div>
                        <div className="hidden xl:block">xl</div>

                    </div>
                    <div className="w-full sticky top-0 lg:static lg:top-auto flex z-1 bg-[#141324] lg:justify-center items-center">
                        <div className="block lg:hidden" onClick={() => setOpen(true)}>Open Menu</div>
                        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 lg:static lg:translate-none">Search button / filter button</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-wrap p-3 justify-items-center">
                        <Project
                            title="Airline Safety Informant"
                            image="airline-info"
                            desc="A project made in Web Development that filters through an api to access crime data. It is a vital resource for community safety and a tool for research."
                            // projectDetails={}
                            coverDetails={{ alt: "air plane by Rafi Al Hakim" }}
                        // air plane by Rafi Al Hakim from <a href="https://thenounproject.com/browse/icons/term/air-plane/" target="_blank" title="air plane Icons">Noun Project</a> (CC BY 3.0)
                        />
                        <Project
                            title="Purified"
                            image="purified"
                            desc="A game that addresses awareness on the lack of clean water and teaches the player methods to solve this issue."
                            links={{
                                project: {link:"https://francisishere.itch.io/purified"},
                                video: {tooltip: "View Trailer", link: "https://www.youtube.com/watch?v=uISKLdbU4N8"},
                                sourceCode: {link:"https://github.com/FrancisTR/Godot-Purified"},
                            }}
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
                    <div className="mb-1000">asdfasf</div>
                </div>
            </div>
        </div>
    );
};

export default Home;