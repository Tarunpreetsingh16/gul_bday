import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function BirthdayWish() {

    const [letterVisibility, setLetterVisibility] = useState(false)

    const [isTitleVisible, setIsTitleVisible] = useState(false)

    const showBdayGirl = () => {
        setLetterVisibility(true)
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
    }

    return (
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
                <div >
                    <motion.div animate={{ 
                        color: 'white',
                        fontSize: '2rem',
                        padding: '3rem 1rem'
                        }}
                        transition= {{ duration: 2 }}
                        id="bdayWishContainer"
                        >
                            <img src='images/gullu_bhai.jpg' alt="gullu bhai" />
                            <h2>Happy Birthday Gullu Bhai!</h2>
                    </motion.div>
                    <div>
                        <motion.div
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
    )
}
export default BirthdayWish;