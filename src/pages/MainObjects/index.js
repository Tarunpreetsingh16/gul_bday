import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import Pictures from '../Objects/Pictures';
import Videos from '../Objects/Videos';
import Letter from '../Objects/Letter';
import BirthdayWish from '../Objects/BirthdayWish';
import './style.css'

function MainObjects({updateStep, step, resetStep}) {

    const pauseInstrumental = () => {
        const instrumentalSong = document.getElementById("instrumentalBdaySong")
        instrumentalSong.pause()
    }

    return (
        step >= 2 ?
        <motion.div>
            <motion.div animate={{
                color: 'white',
                opacity: [0, 1],
                padding: '2rem 0',
                textAlign: 'center',
                fontSize: '1.2rem'}}
                id="scanText"
            >
                    Scan the screen with the cursor to explore...🕵🏻‍♀️
            </motion.div>
            <motion.div 
            id="landingPage"
            className="relative"
            animate={{
                // backgroundColor: 'hsl(0, 0, 0)',
                color: 'hsl(256, 256, 256)'}}
            transition={{ type: "spring", stiffness: 100, delay: 1, duration: 3 }}
            >
                <div className='row'>
                    <Pictures step={step} updateStep={updateStep} />

                <div className='col'>
                    <Videos step={step} updateStep={updateStep} />
                    <BirthdayWish step={step} resetStep={resetStep} pauseInstrumental={pauseInstrumental}/>
                </div>
                <div className='alignRightExtreme'>
                    <Letter step={step} updateStep={updateStep} />
                </div>
                </div>
            </motion.div>
            <audio loop autoPlay id="instrumentalBdaySong">
                <source src='Audio/music_bday.mp3' type='audio/mp3' />
                Your browser does not support the audio element.
            </audio>
        </motion.div>
        :null
    )
}

export default MainObjects;