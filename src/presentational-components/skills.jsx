import React, { forwardRef, useRef } from 'react'
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiRedux, SiRails, SiCss3, SiHtml5, SiJavascript, SiMysql } from 'react-icons/si';
import { Grid, Card, CardContent, CssBaseline, Container, Typography, Avatar, FormControlLabel, Checkbox, FormGroup, Paper } from '@material-ui/core';
import { GiSkills, GiHook } from 'react-icons/gi'
import SkillsParticles from '../presentational-components/skills_particles'
import SpringCard from './spring'
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
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <FaReact color="rgb(0, 216, 255)" size={100} />
                            </div>
                            <h1>
                                ReactJs
                            </h1>
                        </Paper>} />
                    </Grid>
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiRedux color="rgb(118, 74, 188)" size={100} />
                            </div>
                            <h1>
                                Redux
                            </h1>
                        </Paper>}
                        />
                    </Grid>
                    <Grid data-aos="fade-right" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"} >
                            <div style={{ height: '125px' }}>
                                <SiJavascript color="#0d2c5a" size={100} />
                            </div>
                            <h1>
                                JavaScript
                            </h1>
                        </Paper>}
                        />
                    </Grid>
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiCss3 color="rgb(21, 114, 182)" size={100} />
                            </div>
                            <h1>
                                CSS
                            </h1>
                        </Paper>}
                        />
                    </Grid>
                    {window.innerWidth > 960 ? <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={0} xs={0}></Grid> : ''}
                    <Grid data-aos="fade-left" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiHtml5 color="rgb(228, 79, 38)" size={100} />
                            </div>
                            <h1>
                                HTML
                            </h1>
                        </Paper>}
                        />
                    </Grid>
                    <Grid data-aos="fade-right" item xl={3} lg={3} md={3} sm={4} xs={6}>
                        <SpringCard  children={<Paper className={window.innerWidth < 440 ? "paper_skills_xs" : "paper_skills"}>
                            <div style={{ height: '125px' }}>
                                <SiRails color="rgb(204, 0, 0)" size={100} />
                            </div>
                            <h1 className={window.innerWidth < 440 ? "ruby_text" : ''}>
                                Ruby On Rails
                            </h1>
                        </Paper>}
                        />
                    </Grid>
                </Grid>
            </Container>
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
