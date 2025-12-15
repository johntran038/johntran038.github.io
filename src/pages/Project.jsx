import React, { useState } from "react";

const Project = ({ image, alt, title, desc, children }) => {

    return (
        <div>
            <div className="h-50">
                <img className="w-full h-full object-cover" src={`/images/projects/${image}.png`} alt={alt || ''} />
            </div>
            <h2>{title}</h2>
            {
            children ?  //if
                children :
            desc ?      //else if
                desc :
            <p>N/A</p>  // else
            }
        </div>
    );
};

export default Project;