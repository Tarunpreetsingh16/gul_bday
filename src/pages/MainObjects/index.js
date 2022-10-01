import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import Square from '../Objects/Square';

function MainObjects({updateStep, step}) {
    console.log({step})
    return (
        <motion.div 
        id="landingPage"
        className="relative"
        animate={{
            backgroundColor: 'hsl(0, 0, 0)',
            color: 'hsl(256, 256, 256)',
            display: step === 1 ? 'flex' : 'none'}}
        transition={{ type: "spring", stiffness: 100, delay: 1, duration: 3 }}
        >
            <Square />
        </motion.div>
    )
}

export default MainObjects;