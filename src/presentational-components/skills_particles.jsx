import React from "react";
import Particles from "react-particles-js";


export default function SkillsParticles() {
    return (
        <Particles
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height:'84%'
          }}
            params={{
                "particles": {
                    "number": {
                        "value": 8,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": 1,
                        "out_mode": "out"
                    },
                    "shape": {
                        "type": [
                            "image",
                            "circle"
                        ],
                        "image": [
                            {
                                "src": "https://img.icons8.com/color/48/000000/react-native.png",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "https://img.icons8.com/color/48/000000/css3.png",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "https://img.icons8.com/color/96/000000/redux.png",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "https://img.icons8.com/color/48/000000/html-5--v1.png",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "https://img.icons8.com/color/96/000000/redux.png",
                                "height": 20,
                                "width": 20
                            }
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    "size": {
                        "value": 30,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                "retina_detect": false
            }} />
    );
}
