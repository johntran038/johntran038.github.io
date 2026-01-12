import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import VideoIcon from "../IconComponents/VideoIcon";
import ProjectIcon from "../IconComponents/ProjectIcon";
import SourceCodeIcon from "../IconComponents/SourceCodeIcon";


const Project = ({ image, alt, title, desc, children, links }) => {

    return (
        <div className="bg-white">
            <div className="h-80 flex relative group">
                <img className="w-full h-full object-cover" src={`/images/projects/${image}.png`} alt={alt || ''} />
                <div className="absolute bg-[#2276EB]/40 w-full h-full hidden group-hover:block ">
                    <div className="
                        absolute inset-0 flex items-center justify-center opacity-100
                        mt-50 text-white
                    ">
                        <div className="text-[2em] bg-red flex space-x-1">
                        {/* <BiSolidMoviePlay /> */}
                        <VideoIcon/>
                        <SourceCodeIcon/>
                        <ProjectIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <h2 className="font-semibold text-lg">{title}</h2>
                {
                    children ?  //if
                        children : //then children
                    desc ?      //else if
                        desc :      //then desc
                    <p>N/A</p>  // else N/A
                }
            </div>
        </div>
    );
};

export default Project;