import React, { forwardRef, useRef } from 'react'
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiRedux, SiRails, SiCss3, SiHtml5, SiJavascript, SiMysql } from 'react-icons/si';
import { Grid, Card, CardContent, CssBaseline, Container, Typography, Avatar, FormControlLabel, Checkbox, FormGroup, Paper } from '@material-ui/core';
import { GiSkills, GiHook } from 'react-icons/gi'
import Logo from '../images/img9.jpeg';
import SkillsParticles from '../presentational-components/skills_particles'
const Skills = forwardRef(({ onBackClick }, ref) => {
    return (
        <div id="skills1" className="skills_container">
            <SkillsParticles />
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid data-aos="fade-up-left" item xl={1} lg={1} md={1} sm={2} xs={3}>
                        <Avatar className="skills_avtar">
                            <GiSkills size={40} />
                        </Avatar>
                    </Grid>
                    <Grid data-aos="fade-up-right" className="skills_grid" item xl={11} lg={11} md={11} sm={10} xs={9}>
                        Skills
                    </Grid>
                    <Grid data-aos="fade-right" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <FaReact color="rgb(0, 216, 255)" size={100} />
                            </div>
                            <h1>
                                ReactJs
                            </h1>
                        </Paper>
                    </Grid>
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiRedux color="rgb(118, 74, 188)" size={100} />
                            </div>
                            <h1>
                                Redux
                            </h1>
                        </Paper>
                    </Grid>
                    <Grid data-aos="fade-right" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"} >
                            <div style={{ height: '125px' }}>
                                <GiHook color="#0d2c5a" size={100} />
                            </div>
                            <h1>
                                Hooks
                            </h1>
                        </Paper>
                    </Grid>
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiCss3 color="rgb(21, 114, 182)" size={100} />
                            </div>
                            <h1>
                                CSS
                            </h1>
                        </Paper>
                    </Grid>
                    {window.innerWidth > 960 ? <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={0} xs={0}></Grid> : ''}
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiHtml5 color="rgb(228, 79, 38)" size={100} />
                            </div>
                            <h1>
                                HTML
                            </h1>
                        </Paper>
                    </Grid>
                    <Grid data-aos="fade-right" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiRails color="rgb(204, 0, 0)" size={100} />
                            </div>
                            <h1 className={window.innerWidth < 440 ? "ruby_text":''}>
                                Ruby On Rails
                            </h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            {/* <svg className="skills_curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" 
                d="M0,96L60,128C120,160,240,224,360,250.7C480,277,600,267,720,245.3C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg> */}
            <div
                className="skills_wave" >
                <svg data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none" >
                    <path
                        d="M1200 0L0 0 598.97 114.72 1200 0z">
                    </path>
                </svg>
            </div>
        </div>
    )
})
export default Skills;
