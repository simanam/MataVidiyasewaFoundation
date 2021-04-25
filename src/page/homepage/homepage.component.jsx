import React from 'react';
import './homepage.styles.scss';

import Hero from "../../components/heroSection.component"
import AboutUs from "../../components/aboutus.component"
import Contact from "../../components/contact.component"
import herostyles from "../../styles/heroPage_styles"
// import Gallery from "../../components/gallery.component"
// import AgnC from "../../components/agendaAndCalendar"
import ImageGallery from "../../components/imagesGrid.component"
import OurTeam from "../../components/ourTeam.component"
import History from "../../components/history.component"
import Footer from "../../components/footer.component"
import { Element } from "react-scroll";



const HomePage = (props) => {
    const classes = herostyles()

    return (



        <div className={classes.homePage}>


            <Element name="hero"><Hero id="hero" /></Element>

            <Element name="aboutus"><AboutUs id="aboutus" /></Element>

            <Element name="contact"><Contact id="aboutus" /></Element>
            {/* <Element name="contact"><Gallery id="contact" /></Element> */}
            <Element name="contact"><History id="contact" /></Element>

            <Element name="contact"><ImageGallery id="contact" /></Element>
            <Element name="contact"><OurTeam id="contact" /></Element>
            <Element name="contact"><Footer id="contact" /></Element>


        </div>
    )
}

export default HomePage