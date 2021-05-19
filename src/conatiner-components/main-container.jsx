// import React, { useEffect, useRef } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css';
import About from '../presentational-components/home'
import Skills from '../presentational-components/skills'
import Expereince from '../presentational-components/expereince'
import Portfolio from '../presentational-components/portfolio'
import Contact from '../presentational-components/contact';
import React, { useEffect, useState } from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import { Menu, Item } from "../utils/menu";
import Paper from '@material-ui/core/Paper';
import '../styles/styles.css'
import { Container } from '@material-ui/core';
import SkillsParticles from '../presentational-components/skills_particles';
import Spring from '../presentational-components/spring'

function MainContainer() {
    useEffect(()=>{
        // console.log("sbwudb= ",window.innerWidth)
    })
  
  return (
    <div>
    <ScrollingProvider scrollBehavior="smooth">
      <Menu className="header-menu">
        <Item section="about">ABOUT</Item>
        <Item section="skills">SKILLS</Item>
        <Item section="expereince">{window.innerWidth <=500? 'EXP':'EXPEREINCE'}</Item>
        <Item section="portfolio">{window.innerWidth <=500? 'PORT':'PORTFOLIO'}</Item>
        <Item section="contact">{window.innerWidth <=500? 'CONT':'CONTACT'}</Item>
      </Menu>
      <Section id="about">
        <About background="lightblue">🏠</About>
      </Section>
      <Section id="skills">
        <Skills background="orange">🙋‍♂️</Skills>
      </Section>
      <Section id="expereince">
        <Expereince background="orange">💻</Expereince>
      </Section>
      <Section id="portfolio">
        <Portfolio background="orange">💌</Portfolio>
      </Section>
      <Section id="contact">
        <Contact background="orange">💌</Contact>
      </Section>
    </ScrollingProvider>
    </div>
  );
}

export default MainContainer;
