import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import IconFrame from "./IconFrame";


const ProjectIcon = (className) => {

    return (
        <IconFrame tooltip="View Project">
            <FaFolder className="group-hover/icon:hidden" />
            <FaRegFolderOpen className="hidden group-hover/icon:block" style={{ animationDuration: "3s" }} />
        </IconFrame>
    );
};

export default ProjectIcon;