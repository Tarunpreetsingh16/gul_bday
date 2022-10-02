import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import Pictures from '../Objects/Pictures';
import Videos from '../Objects/Videos';
import Letter from '../Objects/Letter';

function MainObjects({updateStep, step}) {
    console.log({step})
    return (
        <motion.div 
        id="landingPage"
        className="relative "
        animate={{
            // backgroundColor: 'hsl(0, 0, 0)',
            color: 'hsl(256, 256, 256)',
            display: step === 1 ? 'flex' : 'none'}}
        transition={{ type: "spring", stiffness: 100, delay: 1, duration: 3 }}
        >
            <div className='row'>
                <Pictures />
                {/* <Videos /> */}
                <Letter />
            </div>
        </motion.div>
    )
}

export default MainObjects;