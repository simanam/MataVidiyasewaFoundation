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
        window.open("https://www.google.com/maps/place/Kalyanpur,+Vikasnagar,+Uttarakhand+248198,+India/@30.4653047,77.7601186,16z/data=!4m5!3m4!1s0x390f2f99c622036b:0xa12f8e6642fa399d!8m2!3d30.4649665!4d77.7638042")
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