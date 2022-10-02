import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function Pictures() {

    const [bdayGirlVisibility, setBdayGirlVisibility] = useState(false)

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const [isTitleVisible, setIsTitleVisible] = useState(false)

    const [backButtonDisplay, setBackButtonDisplay] = useState('none')

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

    var currentImage = 0;
       
    const imagesArray = [
        'images/gul12.jpeg',
        'images/gul2.jpeg',
        'images/gul3.jpeg',
        'images/gul4.jpeg',
        'images/gul5.jpeg',
        'images/gul6.jpeg',
        'images/gul7.jpeg',
        'images/gul8.jpeg',
        'images/gul9.jpeg',
        'images/gul10.jpeg',
        'images/gul11.jpeg',
        'images/gul1.jpeg',
    ]

    const [images, setImages] = useState([]);


    useEffect(() => {
        if (images.length === imagesArray.length - 1) {
            setTimeout(() => {
                setBackButtonDisplay('flex')
            }, 2000)
        } else if (images.length === 0) {
            setBackButtonDisplay('none')
            setBdayGirlVisibility(false)
        }
    }, [images.length]);


    const showBdayGirl = () => {
        setBdayGirlVisibility(true); 
        
        const interval = setInterval(() => {
            currentImage++
            if(currentImage === imagesArray.length) {
                clearInterval(interval)
            } else {
                setImages(images => [...images, imagesArray[currentImage]])
            }
        }, 10);
    }

    const hoverAndTap = {
        scale: 1.2,
        boxShadow: "0rem 0rem 10rem rgba(241, 90, 34, 1)",
        backgroundColor: "rgba(241, 90, 34, 0.1)" ,
        color: "rgba(256, 256, 256, 1)",
        transition: { duration: 0.5 }
    }

    const goBack = () => {
        var numberOfImagesPopped = 0
        const interval = setInterval(() => {

            if(numberOfImagesPopped === imagesArray.length) {
                clearInterval(interval)
            } else {
                setImages((images) => {
                    return images.slice(0, images.length-1)
                })
                numberOfImagesPopped++;
            };
        }, 100);
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
                    {isTitleVisible ? <span>Let's have a look at our birthday girl</span> : null}
                </motion.div>            
            </motion.div>
            {bdayGirlVisibility ? 
                images.map((image, index) => {
                    return (
                        <motion.div key={index} animate={{
                            display: bdayGirlVisibility ? 'flex' : 'none',
                            height: ['0rem', '30rem'],
                            width: ['0rem', '30rem'],
                            position: 'absolute',
                            top: Math.floor(Math.random() * (windowSize.innerHeight - 500) + 0),
                            left: Math.floor(Math.random() * (windowSize.innerWidth - 500) + 0),}}
                            transition = {{ type: "spring", stiffness: 500}}
                            className="bdayGirlPictureContainer">
                            <img src={image} className="bdayGirlPicture" alt={image}/>
                        </motion.div>
                    )
                })
                : null
            }

            <motion.div
                className="backButton"
                animate={{
                    display: backButtonDisplay,
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
    )
}
export default Pictures;
