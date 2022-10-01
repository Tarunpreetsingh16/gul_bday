import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import './style.css'

function Triangle() {

    const [bdayGirlVisibility, setBdayGirlVisibility] = useState(false)
    const [tileWidth, setTileWidth] = useState('10rem')
    const [tileHeight, setTileHeight] = useState('10rem')

    const [windowSize, setWindowSize] = useState(getWindowSize());

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
        'images/gul1.jpeg',
        'images/gul2.jpeg',
        'images/gul3.jpeg',
        'images/gul4.jpeg',
        'images/gul5.jpeg',
        'images/gul6.jpeg',
        'images/gul7.jpeg',
        'images/gul8.jpeg',
        'images/gul9.jpeg',
        'images/gul10.jpeg',
        
    ]

    const [images, setImages] = useState([imagesArray[currentImage]]);

    const showBdayGirl = () => {
        setBdayGirlVisibility(true);
        setTileHeight('30rem');
        setTileWidth('30rem')     
        
        const interval = setInterval(() => {
            currentImage++
            if(currentImage == imagesArray.length) {
                clearInterval(interval)
            } else {
                setImages(images => [...images, imagesArray[currentImage]])
            }
          }, 3000);
    }

    return (
        <div>
            <motion.div 
                id="triangle"
                className="shapeObject"
                animate={{
                    borderRadius: 10,
                    height: ['0rem', tileHeight],
                    width: ['0rem', tileWidth],
                    display: bdayGirlVisibility ? 'none' : 'flex',
                }}
                onClick={showBdayGirl}
                whileHover={{
                    scale: 1.2,
                    boxShadow: "0rem 0rem 10rem rgba(241, 90, 34, 1)",
                    backgroundColor: "rgba(241, 90, 34, 0.1)" ,
                    color: "rgba(256, 256, 256, 1)",
                    transition: { duration: 0.5 }
                }}    
                >
                <motion.div className="clickable shapeObjectTitle"
                    animate={{ opacity: [0, 1] }}
                    transition={{ type: "spring", stiffness: 100, delay: 5, duration: 1 }}
                    >
                    <span>Let's have a look at the birthday girl</span>
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
                            <img src={image} className="bdayGirlPicture" />
                        </motion.div>
                    )
                })
                : null
            }
            
        </div>
    )
}
export default Triangle;
