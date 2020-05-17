import React from 'react';
import CallToActionTop from "./CallToActionTop";
import ShortBlock1 from "./ShortBlock-1";
import Offers from "./Offers";
import Usage from "./Usage";
import Carousel from "./Carousel";
import CallToActionBottom from "./CallToActionBottom";
import ContactForm from "./ContactForm";
import CommercialOffers from "./CommercialOffers";

function Main() {
    return (
        <main>
            <CallToActionTop/>
            <ShortBlock1/>
            <Offers/>
            <CommercialOffers/>
            <Usage/>
            <Carousel/>
            <CallToActionBottom/>
            <ContactForm/>
        </main>
    );
}

export default Main;
