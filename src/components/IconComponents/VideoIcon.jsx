import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import IconFrame from "./IconFrame";


const VideoIcon = () => {

    return (
        <IconFrame tooltip="View Demo">
            <BsPlayFill className="group-hover/icon:hidden"/>
            <BiLoaderCircle className="animate-spin duration-700 hidden group-hover/icon:block" style={{ animationDuration: "3s" }}/>
        </IconFrame>
    );
};

export default VideoIcon;