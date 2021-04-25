import React from 'react';
import { Typography, Grid, Box, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';






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
        margin: "30px",
        background: 'linear-gradient(to bottom right, #ebedee, #fdfbfb )',
        height: "100%",
        maxHeight: "70vh",
        overflow: "scroll"




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


        margin: '10px 60px'


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
    paraAbout: {

        fontSize: "16px",

        fontWeight: "300",
        fontFamily: "Roboto",


    },






}));

const History = (props) => {
    const classes = useStyles();



    return (

        <Box className={classes.root}>
            <Grid container className={classes.callen} spacing={2}>
                <Grid item xs={12}><Typography className={classes.titleAbout} variant={'h3'}>History</Typography></Grid>
                <Grid item xs={12} className={classes.imageBox} justify="center" spacing={1}>
                    <Typography align='center' className={classes.paraAbout} variant={'p'}>Mata Vidiyasewa Foundation was founded in 2021 by Ashok Singh. Ashok is an active contributor to the community through his generous monetary and other donations. His background as a religious preacher in numerous foreign countries and as a successful businessman enabled him to pursue his life goal to establish Mata Vidyasewa Foundation to address the needs of the growing senior population. Ashok’s inspirations lies in his father who was forced to leave the family during Ashok’s childhood due to a terminal illness combined with the financial burden. His father left the family to never return or be founded. Through the establishment of Mata Vidyasewa Foundation, Ashok vows to aid the elderly with shelter, food, clothing and access of top healthcare services.
</Typography>



                </Grid>

            </Grid>
        </Box>

    )
}

export default History