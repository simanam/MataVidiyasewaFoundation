import React from 'react';
import { Typography, Grid, Paper, Box, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';

import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Ashok from "../assests/images/ahsok.png";
import Sunil from "../assests/images/sunil.png";
import Vinod from "../assests/images/vinod.png";
import Jasbir from "../assests/images/jasbir.png";


import "./contact.scss"

const memberdata = [{ name: "Ashok Singh", position: "Founder", img: Ashok }, { name: "Jasbir Kaur", position: "Co-Founder", img: Jasbir }, { name: "Sunil Gandhi (USA)", position: "President", img: Sunil }, { name: "Vinod Kumar", position: "Treasury", img: Vinod }]
const useStyles = makeStyles(({ theme, palette }) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // '& > *': {
        //     margin: theme.spacing(1),
        // },
        margin: "30px",
        background: 'linear-gradient(to bottom right, #ebedee, #fdfbfb )',
        height: "100%",



    },
    callen: {
        width: "100%",
        textAlign: 'center',



    },
    titleAbout: {


        fontWeight: "300",
        fontFamily: "Roboto",
        // color: "#fff"
    },

    imageBox: {
        width: "100%",


        margin: '10px'


    },
    contentBox: {
        width: "100%",
        textAlign: 'left',
        marginTop: '25px',



    }, card: {

        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
        background: "transparent",



    },
    avatar: {
        width: 90,
        height: 90,
        margin: 'auto',
        border: "5px solid #A3003F"
    },
    heading: {
        fontSize: 18,

        letterSpacing: '0.5px',
        fontWeight: "300",
        fontFamily: "Roboto",

        marginTop: 8,
        marginBottom: 0,


    },
    subheader: {
        fontSize: 14,

        marginBottom: '0.875em',

        fontWeight: "300",
        fontFamily: "Roboto",
        color: "#A3003F"
    },






}));

const Team = (props) => {
    const classes = useStyles();



    return (

        <Box className={classes.root}>
            <Grid container className={classes.callen} spacing={2}>
                <Grid item xs={12}><Typography className={classes.titleAbout} variant={'h3'}>At your service</Typography></Grid>
                <Grid container className={classes.imageBox} justify="center" spacing={1}>
                    {memberdata.map((mem, i) => (
                        <Grid key={i} item xs={12} sm={3} >
                            <Box className={cx(classes.card)}>
                                <CardContent>
                                    <Avatar className={classes.avatar} src={mem.img} />
                                    <h3 className={classes.heading}>{mem.name}</h3>
                                    <span className={classes.subheader}>{mem.position}</span>
                                </CardContent>

                            </Box>


                        </Grid>
                    ))}


                </Grid>

            </Grid>
        </Box>

    )
}

export default Team