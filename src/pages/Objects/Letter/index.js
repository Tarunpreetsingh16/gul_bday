import React, { useState, useRef } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function Letter({updateStep, step}) {

    const [letterVisibility, setLetterVisibility] = useState(false)

    const [isTitleVisible, setIsTitleVisible] = useState(false)

    const [iLove, setILove] = useState('exploring things with you!')

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const backButton = useRef(null)

    const showBdayGirl = () => {
        setLetterVisibility(true)
    }

    const iLoveArray = [
        'making fun of you 🤓',
        'how we decide to eat healthy and end up having unhealthy 🌚🌝',
        'enjoy spending time with you 👩🏻‍🤝‍👨🏽',
        'how you look 👸🏻',
        'how much understanding you are 🫱🏼‍🫲🏽',
        'how much caring you are 🫶🏽',
        'we have the same compassion for puppies 🐶',
        'you! ❤️'
    ]

    const hoverAndTap = {
        scale: 1.2,
        boxShadow: "0rem 0rem 10rem rgba(241, 90, 34, 1)",
        backgroundColor: "rgba(241, 90, 34, 0.1)" ,
        color: "rgba(256, 256, 256, 1)",
        transition: { duration: 0.5 }
    }

    const goBack = () => {
        setLetterVisibility(false)
        updateStep()
    }

    const changeILoveText = () => {
        var currentIndex = currentTextIndex
        if (currentIndex === iLoveArray.length) {
            setCurrentTextIndex(0)
            currentIndex = 0
        }
        setILove(iLoveArray[currentIndex])
        setCurrentTextIndex(currentIndex + 1)
    }

    return (
        step === 4 ?
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
                    {isTitleVisible ? <span>Letter for the birthday girl</span> : null}
                </motion.div>            
            </motion.div>
            
            {letterVisibility ?
                <div >
                    <motion.div animate={{ 
                        color: 'white',
                        fontSize: '2rem',
                        padding: '3rem 1rem'
                        }}
                        transition= {{ duration: 2 }}
                        id="letter"
                        >I was so confused what to do for your birthday. I decided to write a letter for you, but 
                        when I started writing it, I realized I need to do something better as you deserve great things in life.
                        I want to write things about us and how my life has changed since we met; however, I do not want to take
                        your day and make it about us. So, I will only say a few things. <br/><br/>
                        In the past 6 months, we have learnt a lot about each other. I still remember the day when we first met in Guelph.
                        I was so nervous because that was my first time meeting a stranger. It's engraved in my mind when I was looking for you in the parking lot, and you snuck behind me.
                        In that moment, I did not know what to say, and I am happy I did not say anything foolish; otherwise, I wouldn't have found such a 
                        pefect girl. I do not know how you have been bearing me as I know sometimes, day in-day out, you easily get irritated and mad because of the things I do.
                        Sometimes you get mad even if I do not do anything and that is funny to me, like yesterday I was making this site for you and needed some time,
                        but you got mad 🤷🏽‍♂️. Thanks to you that I get to explore things. You have filled both the places in my life, a friend and a lovely partner. 
                        I hope we stay the same and keep exploring new things to do.<br/><br/>

                        There is one thing that I will never forget. I was alone for almost 2.5 years and I was sure that I will be stuck
                        in my past forever, but you came along. You made my eyes sparkle for the first time in past 2.5 years. I knew right during our first meeting that you 
                        and I were going to be more than just 2 strangers. I remember that awkward bye when we first met. I was so ecstatic, adrenaline rushing through veins, I forgot how and what 
                        to say once a date was over.<br/><br/>

                        I do not know what happened that made me reinstall Dil Mil and text you, but I am glad I did.

                        Sorry for making it about me but I just wanted to let you know how you changed everything. <br/><br/>
                        Happy Birthday Gurman! I wish we spend your next thousand birthdays together. I love <span id="iLove" onClick={changeILoveText}>{iLove}</span>.
                    </motion.div>
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
                </div>
                : null
            }

            
        </div>
        : null
    )
}
export default Letter;