import React, { forwardRef, useRef, useEffect, useState } from 'react';
import '../styles/styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Grid, Card, CardContent, CssBaseline, Container, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/styles.css'
import { ImLocation2 } from 'react-icons/im';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        paddingBottom: 5
    }
});
function Contact() {
    const classes = useStyles();
    const [zoomin, setZoomin] = useState("");

    const onEmail = () => {

    }
    return (
        <div id="contact1" className="contact_conatiner_grid">
            <img src="https://appco-react.themetags.com/img/footer-top-shape.png"/>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <h1 data-aos="fade-right" className="h1_name">
                            Reach Out to me!
                        </h1>
                        <p data-aos="fade-left" className="lead text-white">
                            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
                        </p>
                        <p data-aos="fade-right" className="full_stack_text">
                            I'm a  Web Developer | React Js Developer | Open Source Contributor
                        </p>
                        <div>
                            <Button
                                className="location_btn"
                                variant="contained"
                                // color="secondary"
                                startIcon={<ImLocation2 />}
                            > Bengaluru, India
                        </Button>
                        </div>
                        <div>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <Avatar className="email_icon">
                                        <MdEmail onClick={() => window.open('mailto:adil.shezin94@gmail.com')} color="#fff" size={30} />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={2}>
                                    <Avatar className="call_icon">
                                        <FiPhoneCall onClick={() => window.open('tel:8904473364')} color="#fff" size={30} />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={2}>
                                    <Avatar className="linkedin_avtar">
                                        <RiLinkedinFill onClick={() => window.open("https://www.linkedin.com/in/adil-c-1ba7681b3/")} color="#fff" size={30} />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={2}>
                                    <Avatar className="twitter_icon">
                                        <RiTwitterFill onClick={() => window.open("https://twitter.com/AdilC71998281")} color="#fff" size={30} />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={2}>
                                    <Avatar className="git_icon">
                                        <FaGithub onClick={() => window.open("https://github.com/adil-94")} color="#fff" size={30} />
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    {window.innerWidth < 960 ? '' : <Grid className="profile_img_grid" data-aos="fade-left" item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <Card className={classes.root}>
                            <CardContent className="reactout_card">
                                <img className="profile_img" src="https://adil-94.github.io/adil-portfolio/static/media/adil_avtar.db13f6ce.jpeg" />
                            </CardContent>
                        </Card>
                    </Grid>}
                </Grid>
            </Container>
        </div>
    )
}
export default Contact;