import { useState, useEffect } from "react";

const useResponsive = () => {

    const tune = (...styling) => {
        let result = '';
        const prefix = 0;
        const include = 1;
        const variation = 2;
        // const sizes = ['', 'sm:', 'md:', 'lg:', 'xl:']
        const sizes = {
            'd': '', //default
            'x': 'xl:',
            's': 'sm:',
            'm': 'md:',
            'l': 'lg:',
            'X': 'xl:'
        }

        for (let i = 0; i < styling.length; i++) {
            const style = styling[i].split(":");
            const included = style[include].split('');
            const variant = style[variation].split("/");

            if (included.length !== variant.length) continue;
            
            for (let j = 0; j < variant.length; j++) {
                const includedSize = sizes[included[j]];
                // if (variant[j] == "x") continue;
                console.log(`${includedSize}${style[prefix]}-${variant[j]}`);
                // console.log(sizes[included[j]]);
                result += `${includedSize}${style[prefix]}-${variant[j]} `;
            }
        }
        return result;
    }


    return { tune };
};

export default useResponsive;