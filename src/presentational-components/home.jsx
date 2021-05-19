import React, { forwardRef, useRef, useEffect } from 'react';
import '../styles/styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Grid, Card, CardContent, CssBaseline, Container, Button, CardMedia, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/styles.css'
import ProfilePic from '../images/profile-pic-2.png';
import Adil from '../images/Adil-profile.jpeg'
import Wave from '../images/wave123.png';
import { ImFilePdf } from 'react-icons/im'
import SpringCard from './spring'
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
        Aos.init({ duration: 2000 })
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
                    {/* <Grid className="profile_img_grid" data-aos="fade-left" item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <Paper className={classes.root}>
                            <img className="img-in-cell" src={ProfilePic} />
                        </Paper>

                    </Grid> */}
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <SpringCard children={
                        //     <Avatar variant="square" >
                        //     N
                        //   </Avatar>
                        <div className="profile-glass-card">
                            <img className="profile-glass-card-img" src={Adil} />
                        </div>
                        }
                        />
                    </Grid>
                </Grid>
            </Container>
            <div className="section-shape position-absolute"><img src="https://appco-react.themetags.com/img/wave-shap.svg" alt="shape" /></div>
        </div>
    )
}
export default Home;