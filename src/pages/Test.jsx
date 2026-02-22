import React, { useEffect, useState } from "react";
import Project2 from "../components/Project2";
import ProjectInfoList from "../ref/ProjectInfoList.json"

const Test = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let v = window.scrollY;
            if (v > window.innerHeight) v = window.innerHeight;
            setValue(v);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-[#1c0522] min-h-screen h-full text-white">
            {/* Parallax section */}
            <div className="relative overflow-hidden grid bg-[#042c46] pointer-events-none select-none">
                {/* All children share the same grid cell */}
                <img
                    src="./images/parallax/back.png"
                    alt=""
                    className="w-full h-full object-cover col-start-1 row-start-1"
                    style={{ transform: `translateY(${value * 0.8}px)` }}
                />
                <img
                    src="./images/parallax/mid.png"
                    alt=""
                    className="w-full h-full object-cover col-start-1 row-start-1"
                    style={{ transform: `translateY(${value * 0.5}px)` }}
                />
                <img
                    src="./images/parallax/fore.png"
                    alt=""
                    className="w-full h-full object-cover col-start-1 row-start-1"
                    style={{ transform: `translateY(${value * 0}px)` }}
                />
                <div className="w-full h-full pointer-events-none absolute bg-gradient-to-t from-[#1c0522] to-transparent to-20%" />
            </div>

            {/* Content below so you can scroll */}
            <div className="space-y-4 pb-200">
                <div className="mb-80"></div>
                {ProjectInfoList.map((project, index) =>
                    <Project2
                        key={index}
                        title={project?.title}
                        description={project?.description}
                        imageInfo={project?.imageInfo}
                        links={project?.links}
                        devtools={project?.devtools}
                    />
                )}

            </div>
        </div>
    );
};

export default Test;
