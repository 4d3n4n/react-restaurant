import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import footerTexts from '../../data/siteTexts/footer';
import x from '../../assets/x.svg'
import line from '../../assets/line.png'
import './footer.css';

const Footer = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { text, social } = footerTexts;

    return (
        <footer className="app-footer">
            <p>{text[t]}</p>
            <div className="socials">
                <a className='xBtn'>
                    <img src={x} alt="x" />
                    {social.x[t]}
                </a>
                <a className='lineBtn'>
                    <img src={line} alt="line" />
                    {social.line[t]}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
