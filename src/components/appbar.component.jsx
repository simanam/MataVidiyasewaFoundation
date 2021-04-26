import { React, useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem } from '@material-ui/core'
import herostyles from "../styles/heroPage_styles"
import SortIcon from '@material-ui/icons/Sort'
import { withRouter } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from "react-scroll";
import DonateButton from "./donateButton.component"

const TopNav = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [navClass, setnavClass] = useState(true)

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const { history } = props
    const open = Boolean(anchorEl);
    const classes = herostyles()
    useEffect(() => {



        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;



            if (scrolled <= 5) {
                setnavClass(true)
            } else {
                setnavClass(false)
            }
        })
    }, [])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageUrl) => {


        history.push(pageUrl)
        setAnchorEl(null);
    };


    const pages = props.history.location.pathname


    return (
        <div>{
            pages == '/' ? <AppBar className={navClass ? classes.topBar : classes.topBarOther} >
                <Toolbar  >

                    <Box className={classes.logoBox} >
                        <Box className={classes.logo} onClick={() => handleMenuClick('/')}></Box>

                    </Box>

                    {isMobile ? (<>  <IconButton edge="start" className={classes.menuButton} aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true" onClick={handleMenu}>
                        <SortIcon />
                    </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                        >
                            <Link activeClass={classes.activeClass}
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}> <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem></Link>
                            <Link activeClass={classes.activeClass}
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>  <MenuItem onClick={() => handleMenuClick('/')}>About Us</MenuItem></Link>
                            <Link activeClass={classes.activeClass}
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>   <MenuItem onClick={() => handleMenuClick('/')}>Contact</MenuItem></Link>
                            <MenuItem ><DonateButton /></MenuItem>
                        </Menu></>) : (<Box className={classes.navButtonBox}>
                            <Link activeClass={classes.activeClass}
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>  <Button className={classes.navButton} onClick={() => handleMenuClick('/')}>HOME</Button></Link>
                            <Link activeClass={classes.activeClass}
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}> <Button className={classes.navButton}>ABOUT US</Button></Link>
                            <Link activeClass={classes.activeClass}
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>   <Button className={classes.navButton}>CONTACT</Button></Link>
                            <Button ><DonateButton /></Button>

                        </Box>)}






                </Toolbar>

            </AppBar > :
                <AppBar className={classes.topBarOther} >
                    <Toolbar  >

                        <Box className={classes.logoBox} >
                            <Box className={classes.logo} onClick={() => handleMenuClick('/')}></Box>

                        </Box>

                        {isMobile ? (<>  <IconButton edge="start" className={classes.menuButton} aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true" onClick={handleMenu}>
                            <SortIcon />
                        </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>

                                <MenuItem onClick={() => handleMenuClick('/workPage')}>Donate</MenuItem>
                            </Menu></>) : (<Box className={classes.navButtonBox}>
                                <Button className={classes.navButton} onClick={() => handleMenuClick('/')}>HOME</Button>

                                <Button ><DonateButton /></Button>

                            </Box>)}






                    </Toolbar>

                </AppBar >

        }
        </div >
    )
}
export default withRouter(TopNav)