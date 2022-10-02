import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function Videos() {

    const [bdayGirlVisibility, setBdayGirlVisibility] = useState(false)

    const [isTitleVisible, setIsTitleVisible] = useState(false)

    const videosArray = [
        'Videos/bday_girl.mp4',
        'Videos/gul_skip.mp4',
        'Videos/gul_hoop.mp4',
        'Videos/gul_dunking.mp4'
    ]


    const showBdayGirl = () => {
        setBdayGirlVisibility(true)
    }

    const hoverAndTap = {
        scale: 1.2,
        boxShadow: "0rem 0rem 10rem rgba(241, 90, 34, 1)",
        backgroundColor: "rgba(241, 90, 34, 0.1)" ,
        color: "rgba(256, 256, 256, 1)",
        transition: { duration: 0.5 }
    }

    const goBack = () => {
        setBdayGirlVisibility(false)
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
                    display: bdayGirlVisibility ? 'none' : 'flex',
                }}
                onClick={showBdayGirl}
                whileHover={hoverAndTap}
                whileTap={hoverAndTap}
                onMouseEnter={() => setIsTitleVisible(true)}
                onMouseLeave={() => setIsTitleVisible(false)}
                >
                <motion.div className="clickable shapeObjectTitle">
                    {isTitleVisible ? <span>Let's look at the bacha in action</span> : null}
                </motion.div>            
            </motion.div>
            
            {bdayGirlVisibility ? 
            <div>
                <div className='videosContainer'>
                        {videosArray.map((video) =>
                             <div class='outerBorder'>
                                <video controls loop autoPlay className='video'>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                        )}
                </div>

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
            : null
        }

            
        </div>
    )
}
export default Videos;