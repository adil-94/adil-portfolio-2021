import React, { forwardRef, useRef } from 'react'
import ParticlesBg from "particles-bg";
const HomeParticles = (props) => {
    return (
        <div style={{backgroundColor:"transparent", position:"relative" }}>
            {props.children}
        </div>
    )
}
export default HomeParticles;