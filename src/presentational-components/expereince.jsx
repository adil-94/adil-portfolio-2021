import React, { forwardRef, useRef, useState } from 'react';
import { Grid, Card, CardContent, CssBaseline, Container, Typography, Avatar, CardHeader, FormControlLabel, Checkbox, FormGroup, Paper } from '@material-ui/core';
import { MdWork } from 'react-icons/md';
import { makeStyles } from "@material-ui/core/styles";
import SpringCard from './spring'

const useStyles = makeStyles({
    rootCerner: {
        maxWidth: 345,
        background: 'none',
        boxShadow :'rgb(255 255 255 / 50%) 0px 39px 56px -36px inset, rgb(0 228 228 / 30%) 0px 1px 4px 0px inset, rgb(0 228 228 / 30%) 0px -82px 68px -64px inset, rgb(0 228 228 / 30%) 0px 98px 100px -48px inset, rgb(0 228 228 / 30%) 0px 4px 18px 0px inset, rgb(0 228 228 / 20%) 0px 1px 40px 0px inset, rgb(0 228 228 / 20%) 0px 1px 40px 0px inset'
    },
    rootThomson: {
        maxWidth: 345,
        background: 'none',
        boxShadow: 'rgb(255 255 255 / 50%) 0px 39px 56px -36px inset, rgb(255 175 92 / 30%) 0px 1px 4px 0px inset, rgb(255 175 92 / 30%) 0px -82px 68px -64px inset, rgb(255 175 92 / 30%) 0px 98px 100px -48px inset, rgb(255 175 92 / 30%) 0px 4px 18px 0px inset, rgb(255 175 92 / 20%) 0px 1px 40px 0px inset, rgb(255 175 92 / 20%) 0px 1px 40px 0px inset'
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});
const Expereince = forwardRef(({ onBackClick }, ref) => {
    const classes = useStyles();
    const [tr, setTr] = useState({ raised: false, shadow: 1 })
    const [cerner, setCerner] = useState({ raised: false, shadow: 1 })
    return (
        <div id="expereince1" className="expereince_container">
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid data-aos="fade-up-left" item xl={1} lg={1} md={1} sm={2} xs={3}>
                        <Avatar className="expereince_avtar">
                            <MdWork size={40} />
                        </Avatar>
                    </Grid>
                    <Grid data-aos="fade-up-right" className="expereince_grid" item xl={11} lg={11} md={11} sm={10} xs={9}>
                        Expereince
                    </Grid>
                    <Grid data-aos="fade-down-right" item xl={6} lg={6} md={6} sm={6} xs={12} >
                        <SpringCard children={<Card className={classes.rootCerner}
                            classes={{ root: cerner.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setCerner({ raised: true, shadow: 3 })}
                            onMouseOut={() => setCerner({ raised: false, shadow: 1 })}
                            raised={cerner.raised} zdepth={cerner.shadow}>
                            <CardHeader className="cerner_color_banner"
                                title={<div className="cerner_exp_header">Cerner</div>}
                            />
                            <CardContent>
                                <Typography className="typography_exp" variant="body2" color="textSecondary" component="p">
                                    <img className="cerner_img" src={`https://www.cerner.com/-/media/logos/cerner-color-logo-horizontal.png?vs=1&h=63&w=246&la=en&hash=50B91F449D75A61AEF853ED24FEA5103`} />
                                </Typography>
                                <Typography className="typography_exp" variant="h5" color="textPrimary">
                                    Software Engineer
                                </Typography>
                                <Typography className="typography_exp exp_period" variant="h6" color="textSecondary">
                                    Oct 2018 - Present
                                </Typography>
                                <ul>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Created a responsive UI using Material UI.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Created Associate IDP for authentication which is
                                        Cerner standard authentication.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Track usage of application using Blazer gem which helped my team to generate weekly and monthly reports easily.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Incorporated JIRA APIs within application for all JIRA related operations from application.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Develop high-quality software design and architecture.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Ensure software is up-to-date with latest technologies
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        CI/CD Docker.
                                        </Typography>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>}
                        />
                    </Grid>
                    <Grid data-aos="fade-down-left" item xl={6} lg={6} md={6} sm={6} xs={12} >
                        <SpringCard  children={<Card className={classes.rootThomson}
                            classes={{ root: tr.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setTr({ raised: true, shadow: 3 })}
                            onMouseOut={() => setTr({ raised: false, shadow: 1 })}
                            raised={tr.raised} zdepth={tr.shadow}>
                            <CardHeader className="tr_color_banner"
                                title={<div className="tr_exp_header">Thomson Reuters</div>}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <img className="tr_img" src='https://s.yimg.com/hz/en_us/Finance/US_AFTP_CNWGROUP_CCM_LIVE/THOMSON_REUTERS_LOGO.jpg' />
                                </Typography>
                                <Typography className="typography_exp" variant="h5" color="textPrimary">
                                    Software Trainee
                                </Typography>
                                <Typography className="typography_exp exp_period" variant="h6" color="textSecondary">
                                    Mar 2017 - Oct 2018
                                </Typography>
                                <ul>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Created a responsive UI using Material UI.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Automated scripts for processing invoice, shipping bill and order details.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Develop new Enhancements based on requirements.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                        Animations using AOS.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Dashboard for weekly, monthly and yearly reports.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Auto triggering email to client when weekly reports are generated.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Deploying app on linux servers.
                                        </Typography>
                                    </li>
                                    <li className="li_items">
                                        <Typography variant="body2" color="textSecondary">
                                            Super user functionality which allow super client to edit, delete and create calculations.
                                        </Typography>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>}
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* <svg className="exp_curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L1440,32L1440,320L0,320Z"></path></svg> */}
        </div>
    )
})
export default Expereince;