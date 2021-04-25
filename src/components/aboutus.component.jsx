import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        marginTop: "20px",


    },
    card: {
        height: 180,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 3px 6px 0 #e66465',
        '&:hover': {
            // background: 'linear-gradient(to right, #e66465, #9198e5)',
            color: '#fff',
            boxShadow: '0 6px 12px 0 #9198e5',

        }

    },




    control: {
        padding: theme.spacing(2),
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        '&:hover': {
            color: '#fff',
        },

    },
    perc: {
        color: "orangered",

        fontWeight: "300",
        fontFamily: "Roboto",
        // '&:hover': {
        //     color: '#fff',
        // },
    },
    para: {
        color: "#543822",
        fontSize: "18px",

        fontWeight: "300",
        fontFamily: "Roboto",

    },

}));



const AboutUs = (props) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const data = [{ perc: "12.5%", line: "Elderly population by 2026", links: 'https://www.helpageindia.org/wp-content/uploads/2018/06/ELDER-ABUSE-IN-INDIA-2018-A-HelpAge-India-report.pdf' }, { perc: "25%", line: "Victim of Elder abuse", links: 'https://www.helpageindia.org/wp-content/uploads/2018/06/ELDER-ABUSE-IN-INDIA-2018-A-HelpAge-India-report.pdf' }, { perc: "3mm", line: "Facing destitution", links: 'https://www.google.com/amp/s/www.thehindu.com/news/cities/bangalore/of-the-25000-homeless-people-in-bengaluru-around-7500-are-elderly-women/article28629248.ece/amp/' }]

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };



    return (



        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {data.map((value, i) => (
                        <Grid key={i} item>
                            <Card className={classes.card} >
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.perc} variant={'h2'}>{value.perc}</Typography>
                                    <Typography className={classes.para} variant={'p'}>{value.line}</Typography>
                                    <CardActions>
                                        <Button onClick={() => (window.open(value.links))} size="small">Learn More</Button>
                                    </CardActions>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

    )
}

export default AboutUs