import React, { useEffect, useRef } from 'react';
import './style.css';
import {gsap} from 'gsap';

function Landing() {

    const bdayTitle = useRef();

    useEffect(() => {
        gsap.fromTo(bdayTitle.current,
            {opacity: 0, y: -500},
            {duration: 2, opacity: 1, y: 0, ease: "bounce"})
    })

    return (
        <div id="landingPage">
            <h1 id="bdayTitle" ref={bdayTitle}>
                Happy Birthday love!
            </h1>
        </div>
    )
}
export default Landing;
