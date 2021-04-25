import React from 'react';
import { Typography, Grid, Paper, Box, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AboutImage from '../assests/images/aboutus.jpg'
import HandImage from '../assests/images/hand.jpg'
import WalkImage from '../assests/images/walk.jpg'
import "./contact.scss"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        marginTop: "10px",


    },
    callen: {
        width: "100%",
        textAlign: 'center',



    },
    titleAbout: {


        fontWeight: "300",
        fontFamily: "Roboto",
    },
    content: {
        alignItems: 'center',


    },
    imageBox: {
        width: "100%",
        height: "25vh",

        marginTop: '60px',
        marginBottom: "70px"




    },
    contentBox: {
        width: "100%",

        textAlign: 'left',
        marginTop: '25px',







    },

    paraAbout: {

        fontSize: "16px",

        fontWeight: "300",
        fontFamily: "Roboto",


    },



}));

const Contact = (props) => {
    const classes = useStyles();


    return (

        <Box className={classes.root}>
            <Grid container className={classes.callen} spacing={2}>
                <Grid item xs={12}><Typography className={classes.titleAbout} variant={'h3'}>Who are we?</Typography></Grid>
                <Grid container item spacing={6}>
                    <Grid className={classes.imageBox} item xs={12} sm={6} >
                        <Paper className="composition" >

                            <img src={AboutImage} alt="AboutImage" className="composition__photo composition__photo--p1" />


                            <img src={HandImage} alt="Hand" className="composition__photo composition__photo--p2" />


                            <img src={WalkImage} alt="Walk" className="composition__photo composition__photo--p3" />

                        </Paper>

                    </Grid>
                    <Grid className={classes.contentBox} item xs={12} sm={6}><Typography align='center' className={classes.paraAbout} variant={'p'}>Mata Vidiyasewa Foundation , a non-profit social services organization catering to the elder population. We aim to continue the long tradition of service and outreach embedded in Sikhism to the elder community throughout India, with focus on the Dehradun community as well as the surrounding communities in the vicinity of Uttarakhand.

                    <p align='left' className={classes.paraAbout}>  Our community of constituents include older adults at all stages of their lives- from pre-retirement through elder years, caregivers and their families, well established domestic and foreign organizations, as well as others who share our passion and commitment to serving the elder community.</p>

                    In addition to receiving program income from private paying clients, Mata Vidiyasewa Foundation is funded by generous corporate and philanthropic sources.

                    Mata Vidiyasewa aims to serve the needs of elders through a holistic approach which enables the route for healthier and happier lives.
</Typography></Grid>


                </Grid>

            </Grid>
        </Box>

    )
}

export default Contact