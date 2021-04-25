
import { makeStyles } from '@material-ui/core/styles'
import HeroImage from '../assests/images/Hero.jpg'
import LogoSvg from "../assests/images/logo2.svg"
import HomeSvg from "../assests/images/house.svg"


const heroStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    homePage: {
        width: "100%",
        margin: "0 auto"

    },
    heroContainer: {
        backgroundImage: `url(${HeroImage})`,
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",





    },
    topBar: {
        background: 'transparent',
        boxShadow: "none",
        borderBottom: ".5px #d3d3d3 solid",
        justifyContent: 'space-between',
        flexGrow: "1",

    },
    topBarOther: {

        background: 'linear-gradient(to right, rgba(193,131,84, 0.7), rgba(152,100,80, 0.7),  rgba(146,83,56,0.7),  rgba(84,56,34, 0.7))',
        boxShadow: "none",
        borderBottom: ".5px #d3d3d3 solid",
        justifyContent: 'space-between',
        flexGrow: "1",



    },
    activeClass: {
        backgroundColor: '#A3003F',


    },


    logoBox: {

        width: "150px",
        height: "30px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flexGrow: "1",
        justifyContent: 'left',
        alignItems: 'left',




    },
    logo: {
        backgroundImage: `url(${LogoSvg})`,
        width: "150px",
        height: "30px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

    },
    menuButton: {
        transform: "scale(1.5,-1.5)",
        color: "#fff"



    },
    navButtonBox: {
        color: "#fff",

        fontWeight: "400",
        fontFamily: "Roboto",


    },
    tagLine: {
        width: "100%",
        textAlign: 'center',

    },
    headerLine: {
        color: "#fff",

        fontWeight: "300",
        fontFamily: "Roboto",

    },
    secLine: {
        color: "#fff",

        fontWeight: "300",
        fontFamily: "Roboto",

    },
    houseSvg: {

        width: "100px",
        height: "100px",

    },
    houseGrid: { textAlign: 'left', },
    findUs: {
        color: "#fff",

        fontWeight: "300",
        fontFamily: "Roboto",
        backgroundColor: '#A3003F',

    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },

    navButton: {
        color: "#fff",
        fontFamily: "inherit",
        fontWeight: "inherit",
        letterSpacing: ".01px",


    },
    donateutton: {
        color: "#fff",
        backgroundColor: "#008a00",
        fontWeight: "inherit",
        fontFamily: "inherit",
        letterSpacing: ".01px",
        marginRight: "10px"


    }


}))

export default heroStyles