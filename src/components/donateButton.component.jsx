import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontWeight: "300",
        fontFamily: "Roboto",
    },
    donateutton: {
        color: "#fff",
        backgroundColor: "#008a00",
        fontWeight: "inherit",
        fontFamily: "inherit",
        letterSpacing: ".01px",
        fontWeight: "300",
        fontFamily: "Roboto",



    },
    title: {
        fontWeight: "300",
        fontFamily: "Roboto",

    },
    con: {
        fontWeight: "300",
        fontFamily: "Roboto",
        color: '#A3003F'

    }
}));

function DonateButton() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const toFacebook = () => {
        window.open("https://www.facebook.com/ashram.aasra")
    }
    const toInsta = () => {
        window.open("https://www.instagram.com/p/COGnItKDERy/?igshid=yn2pn7byirge")
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Typography className={classes.title} variant="h5" id="simple-modal-title">Please contact us for donation:</Typography>
            <Typography className={classes.con} variant="h6" id="simple-modal-description">
                Ashok Singh

            </Typography>
            <Typography className={classes.con} variant="p" id="simple-modal-description">
                Phone:+91 8979972870

            </Typography>
            <Typography className={classes.con} variant="p" id="simple-modal-description">  <a href="mailto:matavidiyasewafoundation@gmail.com"> matavidiyasewafoundation@gmail.com</a>    </Typography>
            <a onClick={toFacebook}>  <FacebookIcon /> </a>  <a onClick={toInsta}>  <InstagramIcon /> </a>

        </div>
    );

    return (
        <div>
            <button className={classes.donateutton} type="button" onClick={handleOpen}>
                Donate
      </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modelApp}
            >
                {body}
            </Modal>
        </div>
    );
}

export default DonateButton