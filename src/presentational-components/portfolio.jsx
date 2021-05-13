import React, { forwardRef, useRef, useState } from 'react';
import { Grid, Card, CardContent, CssBaseline, Container, Typography, Avatar, CardHeader, CardMedia, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { makeStyles } from "@material-ui/core/styles";
import CI from '../images/codeinsight.jpeg';
import OSGTM from '../images/osgtm.png';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        borderTop: '4px solid #9629e6'
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
                    <Grid data-aos="fade-up-right" className="expereince_grid" item xl={11} lg={11} md={11} sm={10} xs={9}>
                        Projects
                    </Grid>
                    <Grid  item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Stepper activeStep={0} orientation="vertical">
                            <Step key={1} data-aos="zoom-out-right">
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
                            </Step>
                            <Step key={2} data-aos="zoom-out-left">
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
                            </Step>
                        </Stepper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
})
export default Portfolio;