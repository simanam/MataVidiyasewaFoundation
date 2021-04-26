import React from 'react';
import { Typography, Box, Grid, IconButton, Popover } from '@material-ui/core'
import herostyles from "../styles/heroPage_styles";
import TopNav from "./appbar.component";
import HomeSvg from "../components/houseSvg.component"


const HeroSection = () => {
    const classes = herostyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleHouseClick = () => {
        window.open("https://www.google.com/maps/place/30%C2%B027'49.3%22N+77%C2%B045'35.6%22E/@30.463698,77.759895,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.463698!4d77.759895")
    }

    return (

        <Box className={classes.heroContainer}>
            <TopNav />
            <Grid container spacing={3} className={classes.tagLine}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.headerLine} variant={'h2'}>We Are Home</Typography>
                    <Typography className={classes.secLine} variant={'h6'}>When you need it most</Typography>

                    <IconButton className={classes.houseSvg} edge="start" aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        onClick={() => handleHouseClick()}>
                        <HomeSvg />

                    </IconButton>


                </Grid>
                <Grid className={classes.houseGrid} item xs={12} sm={6}>
                    <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                            paper: classes.paper,
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Typography>KHASRA  5743B RASOOLPUR</Typography>
                        <Typography>Dehradun UK 248198</Typography>
                    </Popover>


                </Grid>


            </Grid>

        </Box>



    )
}
export default HeroSection