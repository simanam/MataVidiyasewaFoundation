import React from 'react';
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

import Data from '../assests/gallery.js'


const useStyles = makeStyles((theme) => ({
    root: {

        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(50),
    },
    heading2: {
        fontSize: theme.typography.pxToRem(15),
        paddingTop: "15px",
        paddingLeft: "10px"

    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),

        padding: "15px"
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
        // alignItems: 'center',


    },
    columnDate: {
        flexBasis: '30%',

        borderRight: `2px solid #3d45c3`,
        textAlign: 'center',
        textJustify: 'center',
        color: "#343434"


    },
    columnTime: {
        flexBasis: '30%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#343434"
    },
    columnTitle: {
        flexBasis: '40%',
        textAlign: 'left',
        color: "#343434"


    },
    conta: {

        justifyContent: 'center',


    },
    title: {
        paddingTop: "10px",
        fontSize: theme.typography.pxToRem(18),
        color: "#343434"

    },
    helper: {

        padding: theme.spacing(0, 1),
    },
    desc: {
        borderBottom: `2px solid #343434`,
        paddingBottom: '5px',
        marginBottom: "10px",
        color: "#343434"


    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },


    },
    share2: {
        paddingTop: "10px",

    },
    shar: {
        marginRight: "20px"

    }









}));

const OurTeam = (props) => {
    const classes = useStyles();
    const data = Data
    console.log(data)

    return (



        <div className={classes.root}>



            <Accordion >
                <AccordionSummary

                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >


                    <Typography component="div" className={classes.columnDate}>
                        <Grid className={classes.conta} container >

                            <Box color="#343434" item xs={6} className={classes.heading} >
                                22
                            </Box>
                            <Box color="red" item xs={6} className={classes.heading2} textAlign="left">April <br /> Thursday</Box>
                        </Grid>
                    </Typography>



                    <div className={classes.columnTime}>
                        <Typography className={classes.secondaryHeading}>01:30 pm - 03:00 pm</Typography>
                    </div>
                    <div className={classes.columnTitle}>
                        <Typography className={classes.title}>CIO Tech Chat</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div className={classes.columnDate} ></div>
                    <div className={classes.columnTime} />


                    <div className={clsx(classes.column, classes.helper)}>
                        <div className={classes.desc}>
                            <Typography variant="body2">
                                Tech chat will be about Apige

                        </Typography>
                            <Typography variant="subtitle2">
                                Add & Share

                        </Typography>
                        </div>
                        <Grid className={classes.share} container>
                            <Typography color="#343434" className={classes.shar} item xs={6} variant="subtitle2">Add To Calendar</Typography>
                            <a href="#secondary-heading-and-columns" className={classes.link}>
                                Outlook
                            </a>

                        </Grid>
                        <Grid className={classes.share2} container>
                            <Typography color="#343434" className={classes.shar} item xs={6} variant="subtitle2">Share This Event</Typography>
                            <a href="#secondary-heading-and-columns" className={classes.link}>
                                CopyUrl
                            </a>

                        </Grid>
                    </div>

                </AccordionDetails>
                <Divider />

            </Accordion>

        </div >


    )
}

export default OurTeam