import React, { useState } from 'react';
import './style.css';
import {motion} from 'framer-motion/dist/framer-motion'


function Landing({updateStep, step}) {
    const [scaleSize, setScaleSize] = useState(3)
    const [backgroundColor, setBackgroundColor] = useState('hsl(256, 256, 256)')
    const [display, setDisplay] = useState('flex')

    const scaleUp = () => {
        setScaleSize(scaleSize + 1.5)
        if (scaleSize > 7) {
            setBackgroundColor('hsl(0, 0, 0)')
            setDisplay('none')
            updateStep()
        }
    }

    return (
        <motion.div
            id="landingPage"
            animate={{backgroundColor, display: step === 2 ? 'flex' : 'none' }}>
            <motion.div
                id="leadingBall"    
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: scaleSize }}
                transition={{ type: "spring", stiffness: 400, damping: 10, duration: 1, times: [0, 0.5, 1] }}
                animate={{ y: [-1000, 1000, -500, 500, -100, 100, 0], display }}
                drag="x"
                onClick={scaleUp}>
                    <motion.div
                        className="clickable"
                        animate={{opacity: [0, 1]}}
                        transition={{ delay: 1, duration: 3 }}>
                        Tap me
                    </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Landing;
