import React from 'react';
import { Typography, Grid, Paper, Box, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';






import "./contact.scss"


const useStyles = makeStyles(({ theme, palette }) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // '& > *': {
        //     margin: theme.spacing(1),
        // },
        margin: "30px 40px",

        height: "100%",
        maxHeight: "70vh",

    },
    ribbonInner: {
        width: "100%",
        height: "4vh",
        background: 'linear-gradient(to right, rgba(193,131,84, 0.7), rgba(152,100,80, 0.7),  rgba(146,83,56,0.7),  rgba(84,56,34, 0.7))'
    },
    contentBox: {
        width: "100%",


        margin: '10px',


    },
    addressi: {
        fontWeight: "300",
        fontFamily: "Roboto",
    },
    upArrow: {
        alignItems: "right",
        justify: "right",
        textAlign: 'right',
    },
    copy: {
        fontWeight: "300",
        fontFamily: "Roboto",
        fontSize: "8px"

    },
    upArrowC: {
        fontWeight: "300",
        fontFamily: "Roboto",
        fontSize: "8px",
        alignItems: "right",
        justify: "right",
        textAlign: 'right',

    }






}));



const Footer = (props) => {
    const classes = useStyles();
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const toFacebook = () => {
        window.open("https://www.facebook.com/ashram.aasra")
    }
    const toInsta = () => {
        window.open("https://www.instagram.com/p/COGnItKDERy/?igshid=yn2pn7byirge")
    }



    return (

        <Box className={classes.root}>
            <Grid container className={classes.ribbonOuter} spacing={2}>

                <Grid container item xs={12} className={classes.contentBox} justify="center" spacing={3}>
                    <Grid item className={classes.addressi} xs={12} sm={4}><Typography className={classes.addressi}>KHASRA  5743B RASOOLPUR</Typography>
                        <Typography className={classes.addressi}>Dehradun</Typography>
                        <Typography className={classes.addressi}>UK 248198</Typography></Grid>
                    <Grid item className={classes.contact} xs={12} sm={4}><Typography className={classes.addressi}>+91 8979972870</Typography>
                        <Typography className={classes.addressi}> <a href="mailto:matavidiyasewafoundation@gmail.com"> matavidiyasewafoundation@gmail.com</a></Typography>
                        <Typography className={classes.addressi}>Follow us</Typography>
                        <a onClick={toFacebook}>  <FacebookIcon /> </a>
                        <a onClick={toInsta}>  <InstagramIcon /> </a>

                    </Grid>
                    <Grid item className={classes.upArrow} xs={12} sm={4}>
                        <a onClick={scrollToTop}> <ArrowUpwardIcon /> </a> <Typography variant="h5">Top</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.imageBox} justify="center" spacing={1}>
                    <Grid item className={classes.addressi} xs={12} sm={4}><Typography className={classes.copy}> </Typography>
                    </Grid>
                    <Grid item className={classes.contact} xs={12} sm={4}><Typography className={classes.copy}></Typography></Grid>
                    <Grid item className={classes.upArrowC} xs={12} sm={4}>
                        <span>&#169;</span>MataVidiyasewaFoundation 2021

                    </Grid>
                </Grid>
                <Box className={classes.ribbonInner} item xs={12}></Box>

            </Grid>
        </Box>

    )
}

export default Footer