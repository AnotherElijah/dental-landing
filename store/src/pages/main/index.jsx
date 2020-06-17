import React from 'react';
import CallToActionTop from "./CallToActionTop";
import ShortBlock1 from "./ShortBlock-1";
import Offers from "./Offers";
import Usage from "./Usage";
import ReviewCarousel from "./ReviewCarousel";
import CallToActionBottom from "./CallToActionBottom";
import ContactForm from "./ContactForm";
import CommercialOffers from "./CommercialOffers";
import {BestSellers} from "../../components/BestSellers/BestSellers";

function Main() {
    return (
        <main>
            <CallToActionTop/>
            <ShortBlock1/>
            <BestSellers/>
            <Offers/>
            <CommercialOffers/>
            <Usage/>
            <ReviewCarousel/>
            <CallToActionBottom/>
            <ContactForm/>
        </main>
    );
}

export default Main;
