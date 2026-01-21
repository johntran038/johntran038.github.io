import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import IconFrame from "./IconFrame";


const VideoIcon = ({tooltip}) => {

    return (
        <IconFrame tooltip={tooltip || "View Video"}>
            <BsPlayFill className="group-hover/icon:hidden"/>
            <BiLoaderCircle className="animate-spin duration-700 hidden group-hover/icon:block" style={{ animationDuration: "3s" }}/>
        </IconFrame>
    );
};

export default VideoIcon;