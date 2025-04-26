import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import './announcements.css'

const Announcements = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { title, content } = pageTexts.pages.announcements;


    return (
        <section>
            <h2>{title[t]}</h2>
            <p>{content[t]}</p>
        </section>
    );
};

export default Announcements;
