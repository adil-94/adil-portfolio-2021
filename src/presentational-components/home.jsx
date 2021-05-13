import React, { forwardRef, useRef, useEffect } from 'react';
import '../styles/styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Grid, Card, CardContent, CssBaseline, Container, Button, CardMedia, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/styles.css'
import ProfilePic from '../images/profile-pic-2.png'
import Wave from '../images/wave123.png';
import { ImFilePdf } from 'react-icons/im'
// import Wave from '../images/wave.png'

const useStyles = makeStyles({
    root: {
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        height: 440,
        padding: 10,
        boxShadow: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        background: 'url(http://appco-react.themetags.com/img/app-product.png)'
    },
    media: {
        width: 330,
        height: 410,
    },
    root2: {
        width: 320,
        height: 410,
        padding: 10
    },
    media2: {
        width: 300,
        height: 380,
    }
});
function Home() {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const onDownloadResume = () => {
        window.open('https://pdfhost.io/v/peT2sP06x_Adil_Pasha_C_Resume.pdf')
    }

    return (
        <div id="about1" className="home_conatiner_grid">
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={3} className="home-grid-1">
                    <Grid className="welcome_grid" item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <div data-aos="fade-right" className="h1_name">
                            Hi all,
                        </div>
                        <div data-aos="fade-right" className="h1_name">
                            I'm Adil Pasha
                        </div>
                        <p data-aos="fade-left" className="lead text-white">
                            A passionate Web Developer and Mobile App Developer having an experience of building Web applications with Reactjs / Redux / Hooks / JavaScript  and some other cool libraries like Material-UI, Terra-UI along with animations.
                        </p>
                        <div>
                            <Button onClick={onDownloadResume} className="download-btn" variant="contained" startIcon={<ImFilePdf />}> SEE MY RESUME</Button>
                        </div>
                    </Grid>
                    <Grid className="profile_img_grid" data-aos="fade-left" item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <Paper className={classes.root}>
                            <img className="img-in-cell" src={ProfilePic} />
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
            {/* <div className="home_curve" >
                <svg data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="home-svg-1"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                    </path>
                </svg>
            </div> */}

            <div className="section-shape position-absolute"><img src="https://appco-react.themetags.com/img/wave-shap.svg" alt="shape" /></div>

        </div>
    )
}
export default Home;