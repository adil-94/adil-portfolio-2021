import React, { forwardRef, useRef, useState } from 'react';
import { Grid, Card, CardContent, CssBaseline, Container, Typography, Avatar, CardHeader, CardMedia, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { makeStyles } from "@material-ui/core/styles";
import CI from '../images/codeinsight.jpeg';
import OSGTM from '../images/osgtm.png';
import SpringCard from './spring'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        // borderTop: '4px solid #9629e6',
        color: '#fff',
        background: '#000',
        boxShadow: 'rgb(255 255 255 / 50%) 0px 39px 56px -36px inset, rgb(150 41 230 / 30%) 0px 1px 4px 0px inset, rgb(150 41 230 / 30%) 0px -82px 68px -64px inset, rgb(150 41 230 / 30%) 0px 98px 100px -48px inset, rgb(150 41 230 / 30%) 0px 4px 18px 0px inset, rgb(150 41 230 / 20%) 0px 1px 40px 0px inset, rgb(150 41 230 / 20%) 0px 1px 40px 0px inset'
    },
    media: {
        height: 0,
        margin: '10px',
        paddingTop: '15.25%',
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)",
    }
});
const useStylesStepper = makeStyles((theme) => ({
    iconContainer: {
        transform: 'scale(2)',
        marginRight: theme.spacing.unit * 5,
    }
}));
const Portfolio = forwardRef(({ onBackClick }, ref) => {
    const classes = useStyles();
    const classesStepper = useStylesStepper();
    const [tr, setTr] = useState({ raised: false, shadow: 1 })
    const [cerner, setCerner] = useState({ raised: false, shadow: 1 });
    let avtarGridSize = window.innerWidth < 700 ? 12 : 1;
    let cardGridSize = window.innerWidth < 700 ? 12 : 11
    return (
        <div id="portfolio1" className="portfolio_container">
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid data-aos="fade-up-left" item xl={1} lg={1} md={1} sm={2} xs={3}>
                        <Avatar className="expereince_avtar">
                            <AiOutlineFundProjectionScreen size={40} />
                        </Avatar>
                    </Grid>
                    <Grid data-aos="fade-up-right" className="projects-text" item xl={11} lg={11} md={11} sm={10} xs={9}>
                        Projects
                    </Grid>
                    <Grid item xl={avtarGridSize} lg={avtarGridSize} md={avtarGridSize} sm={avtarGridSize} xs={avtarGridSize} className="portfolio-avtar-grid" >
                        <Avatar alt="Remy Sharp" src="" className="portfolio-avtar">
                            1
                    </Avatar>
                    </Grid>
                    <Grid item xl={cardGridSize} lg={cardGridSize} md={cardGridSize} sm={cardGridSize} xs={cardGridSize} >
                        <SpringCard dampen={50} deg={600} children={<Step key={2} data-aos="zoom-out-right">
                            <StepLabel classes={{ iconContainer: classesStepper.iconContainer }}>
                                <Card className={classes.root}
                                    classes={{ root: cerner.raised ? classes.cardHovered : "" }}
                                    onMouseOver={() => setCerner({ raised: true, shadow: 3 })}
                                    onMouseOut={() => setCerner({ raised: false, shadow: 1 })}
                                    raised={cerner.raised} zdepth={cerner.shadow}>
                                    <CardMedia
                                        className={classes.media}
                                        image={CI}
                                        title="CodeInsight"
                                    />
                                    <CardContent>
                                        <Typography className="typography_exp" variant="h5" color="textPrimary">
                                            CodeInsight
                                                </Typography>
                                        <Typography className="typography_exp exp_period" variant="h6" color="textSecondary">
                                            Oct 2018 - Present
                                                </Typography>
                                        <div>
                                            CodeInsight is a internal tool for all associates of organization.
                                            Where they can look for CRs which were changed in past to see what was the change made to a file or method.
                                            They can view the difference between files. Create Tasks to Jira Directly from application in a single click, which reduces thier time.
                                                </div>
                                    </CardContent>
                                </Card>
                            </StepLabel>
                        </Step>}
                        />
                    </Grid>
                    <Grid item xl={avtarGridSize} lg={avtarGridSize} md={avtarGridSize} sm={avtarGridSize} xs={avtarGridSize} className="portfolio-avtar-grid" >
                        <Avatar alt="Remy Sharp" src="" className="portfolio-avtar">
                            2
                        </Avatar>
                    </Grid>
                    <Grid item xl={cardGridSize} lg={cardGridSize} md={cardGridSize} sm={cardGridSize} xs={cardGridSize} >
                        <SpringCard dampen={50} deg={600} children={<Step key={2} data-aos="zoom-out-left">
                            <StepLabel classes={{ iconContainer: classesStepper.iconContainer }}>
                                <Card className={classes.root}
                                    classes={{ root: tr.raised ? classes.cardHovered : "" }}
                                    onMouseOver={() => setTr({ raised: true, shadow: 3 })}
                                    onMouseOut={() => setTr({ raised: false, shadow: 1 })}
                                    raised={tr.raised} zdepth={tr.shadow}>
                                    <CardMedia
                                        className={classes.media}
                                        image={OSGTM}
                                        title="OSGTM"
                                    />
                                    <CardContent>
                                        <Typography className="typography_exp" variant="h5" color="textPrimary">
                                            OSGTM
                                            </Typography>
                                        <Typography className="typography_exp exp_period" variant="h6" color="textSecondary">
                                            Mar 2017 - Oct 2018
                                            </Typography>
                                        <div>
                                            Open GTM is a GST calculator tool for Honda Cars India.
                                            User can enter order number or invoice number to see details of items.
                                            Tool used to calculate all types of GST like CGST, SGST, IGST for their imports of items from China and Japan.
                                            They can view weekly, monthly and yearly reports on application.
                                            </div>
                                    </CardContent>
                                </Card>
                            </StepLabel>
                        </Step>}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
})
export default Portfolio;