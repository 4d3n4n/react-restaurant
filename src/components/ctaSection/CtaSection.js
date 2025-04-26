import React, { useContext } from 'react'
import './ctaSection.css'
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import Carousel from '../../components/carousel/Carousel';
import Button from '../button/Button';


const CtaSection = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { review, cta, ctaSection } = pageTexts.pages.home;

    return (
        <div className='cta-section'>
            {/* ajouter carousel photo */}
            <div className='carousel-container'>
                <Carousel />
            </div>
            <div className='cta-infos'>
                <h2>{ctaSection.title[t]}</h2>
                <div className='price-container'>
                    <h3 className='price'>{ctaSection.price[t]}</h3>
                    <div className='cta-price-reassurance'>
                        <p><i class="fa fa-phone" aria-hidden="true"></i>03-3499-9178</p>
                        <p><i class="fa fa-star" aria-hidden="true"></i>4.8 {review[t]}</p>
                    </div>
                </div>
                <p className='desc'>{ctaSection.content[t]}</p>
                <Button
                    text={cta[t]}
                    link="https://pocket-concierge.jp/en/restaurants/244036?date=2025-04-25&partySize=2&serviceType=DINNER"
                    icon="fa fa-cutlery"
                />
            </div>
        </div>
    )
}

export default CtaSection
