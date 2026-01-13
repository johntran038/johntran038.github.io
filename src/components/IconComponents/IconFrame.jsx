import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaFolder } from "react-icons/fa";
// import { FaRegFolderOpen } from "react-icons/fa6";
import { Tooltip } from "@material-tailwind/react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { HiMiniSlash } from "react-icons/hi2";

const IconFrame = ({tooltip, children}) => {

    const bg = "bg-gray-600";

    return (
        <Tooltip content={tooltip} className="bg-black p-1 rounded-md shadow-lg text-sm">
            <div className="flex items-center justify-center">
                <div className={`${bg} w-[3em] h-[2.55em] flex items-center justify-center rounded-sm text-[0.6em] group/icon relative`}>
                    {children}
                </div>
            </div>
        </Tooltip>
    );
};

export default IconFrame;