import React, { useContext, useState } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import MenuCategory from '../../components/menuCategory/MenuCategory';
import bg from '../../assets/bg.mp4';
import './menu.css';

export default function Menu() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { title, content, categories } = pageTexts.pages.menu;

    const groups = {
        plats: ['entrées', 'plats'],
        boissons: ['boissons'],
        desserts: ['desserts'],
    };
    const [active, setActive] = useState('plats');

    return (
        <section className="menu-section">
            <video
                className="bg-video"
                src={bg}
                autoPlay
                loop
                muted
                playsInline
            />

            <h1 className="menu-title">{title[t]}</h1>
            <p className="menu-content">{content[t]}</p>

            <div className="menu-nav">
                {Object.keys(groups).map(group => (
                    <button
                        key={group}
                        className={group === active ? 'active' : ''}
                        onClick={() => setActive(group)}
                    >
                        {categories[group][t]}
                    </button>
                ))}
            </div>

            <MenuCategory categories={groups[active]} />
        </section>
    );
}
