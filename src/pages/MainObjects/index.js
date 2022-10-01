import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import Triangle from '../Objects/Triangle';

function MainObjects({updateStep, step}) {

    return (
        <motion.div 
        id="landingPage"
        className="relative"
        animate={{
            backgroundColor: 'hsl(0, 0, 0)',
            color: 'hsl(256, 256, 256)',
            display: step == 2 ? 'flex' : 'none'}}
        transition={{ type: "spring", stiffness: 100, delay: 1, duration: 3 }}
        >
            <Triangle />
        </motion.div>
    )
}

export default MainObjects;