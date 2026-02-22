import React, { useState, useEffect } from "react";
import DevToolsList from "../ref/DevToolsList.json";
import { Link } from "react-router-dom";
import VideoIcon from "../components/IconComponents/VideoIcon";
import ProjectIcon from "../components/IconComponents/ProjectIcon";
import SourceCodeIcon from "../components/IconComponents/SourceCodeIcon";

/*
TODO:
- make project image stack on top when small
- then make each part into smaller components
*/

const Project2 = ({ title, description, imageInfo, links, devtools }) => {

    const { imageName, alt, backdropColor } = imageInfo || {};
    const iconMap = {
        project: ProjectIcon,
        video: VideoIcon,
        sourceCode: SourceCodeIcon
    };


    const renderIcon = (Icon, info) => {

        return (<div className="text-white">
            {Icon && info &&
                <Link to={info?.link} target={info?.target ?? '_blank'}>
                    <Icon tooltip={info?.tooltip} />
                </Link>
            }
        </div>);
    }

    const test = `bg-black`

    return (
        <div className="flex justify-center align-items-center">
            {/* <div className="xs:block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">small</div>
            <div className="hidden md:block lg:hidden">medium</div>
            <div className="hidden lg:block xl:hidden">large</div>
            <div className="hidden xl:block">xl</div> */}
            <div className="bg-[#301f5c] w-[80%] min-h-100 rounded-4xl grid grid-cols-10 overflow-hidden">
                <div className="relative col-span-4">
                    {backdropColor && <div className={`${backdropColor} absolute inset-0 z-0`} />}
                    <img src={`images/projects/${imageName}.png`} alt={`${alt}`} className="pointer-events-none select-none object-scale-down h-full w-full relative z-1" />
                </div>
                <div className="col-span-6 py-4 px-5 group">
                    <h2 className="text-4xl mb-2">{title}</h2>
                    <p className="text-3xl mb-5">
                        {description}
                    </p>
                    <div className="flex md:grid md:grid-cols-2 xl:grid-cols-3 mb-5 gap-4">
                        {Object.entries(links).map(([key, info]) => {
                            const Icon = iconMap[key];
                            return (<div key={key}
                                className="md:col-span-3 lg:col-span-1">
                                {Icon &&
                                    <div className="bg-[#513f7d] text-[#1779ba] p-2 text-xl rounded-md justify-center items-center flex
                                    w-fit md:w-full
                                ">
                                        {renderIcon(Icon, info)}
                                        <div className="ml-2 text-xl hidden md:block">
                                            <Link to={info?.link} target={info?.target ?? '_blank'}>
                                                {info?.title}
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>);
                        })}
                    </div>

                    {devtools && <div className="flex flex-wrap gap-4">
                        {devtools.map((devtool, index) => (
                            <div key={index}>
                                <div className="flex bg-[#532075] space-x-2 w-fit p-2 rounded-md items-center">
                                    <img className="w-15 h-15 shrink-0" src={DevToolsList[devtool]?.image} alt="" />
                                    <div className="text-xl">{DevToolsList[devtool]?.name}</div>
                                </div>
                            </div>

                        ))}
                    </div>}
                </div>
            </div>
        </div>
    );
};

// in the future change this to the project component
export default Project2;
