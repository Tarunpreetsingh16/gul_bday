import React, { useRef, useState, useEffect } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function BirthdayWish({resetStep, step, pauseInstrumental}) {

    const [letterVisibility, setLetterVisibility] = useState(false)

    const [isTitleVisible, setIsTitleVisible] = useState(false)

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const backButton = useRef(null)

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
  
    useEffect(() => {
        if (!backButton) 
            backButton.current.scrollIntoView()
    });

    const showBdayGirl = () => {
        setLetterVisibility(true)
        pauseInstrumental()
    }

    const hoverAndTap = {
        scale: 1.2,
        boxShadow: "0rem 0rem 10rem rgba(241, 90, 34, 1)",
        backgroundColor: "rgba(241, 90, 34, 0.1)" ,
        color: "rgba(256, 256, 256, 1)",
        transition: { duration: 0.5 }
    }

    const goBack = () => {
        setLetterVisibility(false)
        resetStep()
    }

    const balloonsCount = 5

    const balloonsArray = [];

    for(var i=0; i<balloonsCount; i++) {
        balloonsArray.push(
            <motion.div
                key={i}
                animate={{
                    zIndex: 999,
                    position: 'absolute',
                    bottom: 0,
                    y: ['0vh', '-100vh'],
                    x: [`${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 10)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500)  - 200)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 350)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 250)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 100)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 50)}px`, 
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 150)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) - 50)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 100)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) - 100)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) - 300)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 200)}px`,
                    `${Math.floor(Math.random() * (windowSize.innerWidth - 500) + 300)}px`]}}
                    transition= {{repeat: Infinity, duration: Math.floor(Math.random() * (25 - 5) + 5)}}
                >
                <img src={`images/balloon${i}.png`} alt='balloon' width='30%' />
            </motion.div>
        )
    }

    return (
        step === 5 ?
        <div>
            <motion.div 
                id="square"
                className="shapeObject"
                animate={{
                    borderRadius: 10,
                    height: '10rem',
                    width: '10rem',
                    display: letterVisibility ? 'none' : 'flex',
                }}
                onClick={showBdayGirl}
                whileHover={hoverAndTap}
                whileTap={hoverAndTap}
                onMouseEnter={() => setIsTitleVisible(true)}
                onMouseLeave={() => setIsTitleVisible(false)}
                >
                <motion.div className="clickable shapeObjectTitle">
                    {isTitleVisible ? <span>Lastly ... </span> : null}
                </motion.div>            
            </motion.div>
            
            {letterVisibility ?
                <div>
                    <div
                        style={{fontSize: '1rem', position: 'absolute', left: 10, bottom: 100}}>Turn up the volume lol</div>
                    <motion.div animate={{ 
                            color: 'white',
                            fontSize: '2rem',
                            padding: '3rem 1rem',
                            opacity: [0,1],
                        }}
                        transition= {{ delay: 1, duration: 2 }}
                        id="bdayWishContainer"
                        >
                            <img src='images/gullu_bhai.jpg' alt="gullu bhai" />
                            <motion.div
                                    animate={{ 
                                    top: ['-50%', '50%'] 
                                }}
                                transition={{type: "spring", stiffness: 100, damping: 40, delay: 3, duration: 2}}
                                id='wish'>
                                Happy Birthday Gullu Bhai! 🎂
                            </motion.div>
                    </motion.div>
                    <audio loop autoPlay>
                        <source src='Audio/bday_song.m4a' type='audio/x-m4a' />
                        Your browser does not support the audio element.
                    </audio>
                    <div>
                        <motion.div
                            ref={backButton}
                            className="backButton"
                            animate={{
                                position: 'absolute',
                                right : 10,
                                bottom: 10,
                            }}
                            whileHover={{
                                scale: 1.2
                            }}
                            whileTap={{
                                scale: 1.1
                            }}
                            onClick={goBack}>
                            Go back
                        </motion.div>
                    </div>
                    {
                        balloonsArray.map((balloon) => balloon)   
                    }
                    
                </div>
                : null
            }

            
        </div>
        : null
    )
}
export default BirthdayWish;