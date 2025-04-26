import React, { useContext } from 'react';
import './home.css'
// import { LangContext } from '../../context/LangContext';
// import pageTexts from '../../data/siteTexts/pages';
import HeroSection from '../../components/heroSection/HeroSection';
import CardsSection from '../../components/cardsSection/CardsSection';
import CtaSection from '../../components/ctaSection/CtaSection';
import ReviewsSection from '../../components/reviewsSection/ReviewsSection';
import AdresseSection from '../../components/adresseSection/AdresseSection';

const Home = () => {
    // const { lang } = useContext(LangContext);
    // const t = lang.toLowerCase();
    // const { paragraphs } = pageTexts.pages.home;

    return (
        <>
            <HeroSection />
            <CardsSection />
            <CtaSection />
            <ReviewsSection />
            <AdresseSection />
            {/* <BlogSection /> */}
        </>
    );
};

export default Home;
