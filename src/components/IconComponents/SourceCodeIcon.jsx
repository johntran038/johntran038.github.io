import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { HiMiniSlash } from "react-icons/hi2";
import IconFrame from "./IconFrame";

const SourceCodeIcon = ({tooltip}) => {

    const bg = "bg-gray-600";

    return (
        <IconFrame tooltip={tooltip || "View Source Code"}>
            <div className="absolute inset-0 flex items-center justify-center">
                <HiMiniSlash className=" text-lg w-10" />
                <div className={`
                    absolute top-0 z-0 w-2 h-full mx-[1px]
                    transform origin-bottom scale-y-100 transition-transform duration-300 group-hover/icon:scale-y-0
                    text-lg ${bg}
                `} />
            </div>
            <FiChevronLeft className="z-1 text-xl -mr-1 transition-transform duration-300 group-hover/icon:-translate-x-[0.1em]" />
            <FiChevronRight className="z-1 text-xl -ml-1 transition-transform duration-300 group-hover/icon:translate-x-[0.1em]" />
        </IconFrame>
    );
};

export default SourceCodeIcon;