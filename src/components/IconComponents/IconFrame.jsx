import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";

const IconFrame = ({tooltip, onClick, children}) => {

    const bg = "bg-gray-600";

    return (
        <Tooltip content={tooltip} className="bg-black p-1 rounded-md shadow-lg text-sm">
            <div className="flex items-center justify-center"
                onClick={onClick}
            >
                <div className={`${bg} w-[3em] h-[2.55em] flex items-center justify-center rounded-sm text-[0.6em] group/icon relative`}>
                    {children}
                </div>
            </div>
        </Tooltip>
    );
};

export default IconFrame;