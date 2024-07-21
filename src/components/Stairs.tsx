import {motion} from 'framer-motion';
import React from 'react';

const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// Calculate reversed index for staggered delay
const reversedIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* Render 6 motion divs, each representing a step of the stairs.
            Each will have same animation defined by the stairsAnimation object.
            The delay is calculated dynamically based on the reverse order index.
            Creating staggered effect with decreasing delay for each subsequent step.
        */}
            {
                [...Array(6)].map((_, index) => (
                    <motion.div key={index} variants={stairsAnimation} initial={"initial"} animate={"animate"} exit={"exit"} transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reversedIndex(index) * 0.1
                    }}
                                className={"h-full w-full bg-gray-700 relative"}
                    />
                ))
            }
        </>
    );
};

export default Stairs;