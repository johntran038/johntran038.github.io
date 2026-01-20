import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoIcon from "../IconComponents/VideoIcon";
import ProjectIcon from "../IconComponents/ProjectIcon";
import SourceCodeIcon from "../IconComponents/SourceCodeIcon";


const Project = ({ image, alt, title, desc, children }) => {
    const [maskSizes, setMaskSizes] = useState([]);
    const [maskStyle, setMaskStyle] = useState({});
    const cancelRef = useRef(false);

    // const projectCover =  

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const createPixels = () => {
        const positions = [];
        const images = [];
        const repeats = [];
        const sizes = [];

        for (let x = 0; x <= 100; x += 10) {
            for (let y = 0; y <= 100; y += 10) {
                positions.push(`${x}% ${y}%`);
                images.push("url('/images/projects/purified.png')");
                repeats.push("no-repeat");
                sizes.push("10% 10%");
            }
        }

        setMaskSizes(sizes);

        setMaskStyle({
            WebkitMaskImage: images.join(", "),
            maskImage: images.join(", "),
            maskRepeat: repeats.join(", "),
            maskSize: sizes.join(", "),
            maskPosition: positions.join(", "),
        });
    };

    useEffect(() => {
        createPixels();
    }, []);

    const randomlyAnimatePixels = async (setTo) => {
        let tempSizes = [...maskSizes];
        
        // [0,1,2,3,4,5, ...]
        let availableIndexes = tempSizes.map((_, i) => i);

        while (availableIndexes.length > 0) {
            // Cancels animation
            if (cancelRef.current) return;
            const randPos = Math.floor(Math.random() * availableIndexes.length);
            const index = availableIndexes[randPos];

            tempSizes[index] = setTo;

            
            setMaskSizes([...tempSizes]);
            setMaskStyle(prev => ({
                ...prev,
                maskSize: tempSizes.join(", "),
            }));

            // Remove random pick from available
            availableIndexes.splice(randPos, 1);
            await sleep(1);
        }
    };

    const startAnimation = async (setTo) => {
        // Cancel animation
        cancelRef.current = true;

        // Need delay here or breaks
        await sleep(0);

        // Reset cancel
        cancelRef.current = false;

        await randomlyAnimatePixels(setTo);
    };




    return (
        <div className="bg-white w-90">
            <div className="h-90 flex relative group"  onMouseEnter={() => startAnimation("0% 0%")} onMouseLeave={()=>{startAnimation("10% 10%");}}>
                    <div className="w-full h-full absolute" style={maskStyle}>
                        <div className="project-cover-background flex items-center justify-center">
                            <img className="project-cover-image" src={`images/projects/${image}-cover.png`} alt={alt}
                            onError={(e) => {
                                e.target.src = "/images/projects/project-general-cover.png"
                                e.target.alt = "Project Cover"
                            }}
                            />
                        </div>
                    </div>

                    <img className="w-full h-full object-cover" src={`/images/projects/${image}.png`} alt={alt} />

                <div className="absolute inset-0 flex items-center justify-center mt-50 text-white text-[2em] flex space-x-1">
                    <VideoIcon />
                    <SourceCodeIcon />
                    <ProjectIcon />
                </div>
            </div>

            <div className="p-2">
                <h2 className="font-semibold text-lg">{title}</h2>
                {children || desc || <p>N/A</p>}
            </div>
        </div>
    );
};


export default Project;