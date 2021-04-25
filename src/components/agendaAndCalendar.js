import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, AppBar, Toolbar, Button, Box, Grid, Paper } from '@material-ui/core';
import Ag from './gallery.component';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "10px 100px",
        maxHeight: "70vh",
        overflow: "scroll",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    topBar: {
        background: '#2e2e2e',


    },
    leftBox: {
        background: "#2e2e2e",
        width: "20vh",
        height: "50vh",
        borderBottomLeftRadius: "310px 330px",
        borderTopLeftRadius: "310px 330px",
        position: "relative",
        marginRight: "10px"

    },
    leftGrid: {

        alignContent: "right",
        alignContent: "right"




    },
    calcon: {
        alignContent: "right",
        alignContent: "right"

    },
    textCal: {
        marginTop: "95%",
        marginLeft: "12%",
        position: "absolute",
        color: "white",
        transform: "rotate(90deg)",
        fontSize: "25px",
        fontWeight: "bold",
        letterSpacing: "5px",
        lineHeight: "2"





    },


    activeClass: {
        backgroundColor: '#A3003F',


    },
}));

const AgendaCalendar = () => {
    const [changeView, setchangeView] = useState(true)
    const classes = useStyles();
    const handleMenuClick = (pageUrl) => {
        setchangeView(!changeView)

    };

    return (
        <div className={classes.root}>
            <Grid className={classes.calcon} container>
                <Grid className={classes.leftGrid} item xs={4}>
                    <Container className={classes.leftBox}>
                        <Typography className={classes.textCal}>
                            CIO EVENT <br /> CALENDER
                        </Typography>

                    </Container>

                </Grid>
                <Grid className={classes.rightGrid} xs={8} item>

                    <AppBar className={classes.topBar} position="static">
                        <Toolbar>

                            <Typography variant="h6" className={classes.title}>
                                {changeView ? ('Agenda') : ('Calendar')}
                            </Typography>
                            <Button onClick={() => setchangeView(false)} color="inherit">Month</Button>
                            <Button onClick={() => setchangeView(true)} color="inherit">Agenda</Button>
                        </Toolbar>
                    </AppBar>

                    {
                        changeView ? (<Ag />) : (
                            <div>Calendar</div>
                        )
                    }

                </Grid>

            </Grid>


        </div >
    );
}


export default AgendaCalendar