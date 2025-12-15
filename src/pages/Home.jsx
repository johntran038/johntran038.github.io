import React, { useState } from "react";
import Project from "./Project";
import useResponsive from "../hooks/useResponsive";

const Home = () => {

    const { tune } = useResponsive();
    // bg:green-200/x/blue-100/red-200
    // bg:xsm:green-200/blue-100/red-200
    // tune("bg:green-200/x/x/red-200");
    // tune("bg:green-200/blue-100/x/red-200");
    // tune("bg:xml:green-200/blue-100/red-200");
    return (
        <div className="flex min-h-screen">
            <div className="ml-20 w-60 bg-gray-600 text-white p-6"><h2 className="text-xl font-bold mb-4">Menu</h2>
                <nav className="flex flex-col gap-3">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Projects</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-wrap p-3"> */}
            <div className={`grid gap-6 text-wrap ${tune("grid-cols:dsl:1/2/3")}`}>
                <Project title="Rhythm Swipe" image="rsp">
                    <p>
                        A rhythm game is controlled by a light sensor and turning a knob. There are two versions:<br />
                        One is coded in <a href="https://github.com/johntran038/Rhythm-Swipe_Processing" target="_blank">Java using Processing</a><br />
                        The other is coded in <a href="https://github.com/FrancisTR/Rhythm-Swipe" target="_blank">JavaScript using p5.js</a>
                    </p>
                </Project>
                {/* <Project title="Rhythm Swipe" image="rsp">
                    <p>
                        A rhythm game is controlled by a light sensor and turning a knob. There are two versions:<br />
                        One is coded in <a href="https://github.com/johntran038/Rhythm-Swipe_Processing" target="_blank">Java using Processing</a><br />
                        The other is coded in <a href="https://github.com/FrancisTR/Rhythm-Swipe" target="_blank">JavaScript using p5.js</a>
                    </p>
                </Project>
                <Project title="Rhythm Swipe" image="rsp">
                    <p>
                        A rhythm game is controlled by a light sensor and turning a knob. There are two versions:<br />
                        One is coded in <a href="https://github.com/johntran038/Rhythm-Swipe_Processing" target="_blank">Java using Processing</a><br />
                        The other is coded in <a href="https://github.com/FrancisTR/Rhythm-Swipe" target="_blank">JavaScript using p5.js</a>
                    </p>
                </Project> */}
            </div>
        </div>
    );
};

export default Home;