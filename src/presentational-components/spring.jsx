import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaReact, FaGithub } from 'react-icons/fa';

import { Grid, CardContent, CssBaseline, Container, Typography, Avatar, FormControlLabel, Checkbox, FormGroup, Paper } from '@material-ui/core';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Spring({ children }) {
    return (
        <Card>
            {children}
        </Card>
    );
}

function Card({ children }) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))

    return (
        <animated.div
            // ref={ref}
            className="card"
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            {children}
        </animated.div>
    );
}

