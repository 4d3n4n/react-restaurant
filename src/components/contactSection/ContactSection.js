import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import siteTexts from '../../data/siteTexts/pages';
import GoogleMap from '../customGoogleMap/CustomGoogleMap';
import './contactSection.css';

export default function ContactSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const contact = siteTexts.pages.contact;

    return (
        <section className="contact-section">
            <div className="map-wrapper">
                <GoogleMap />
            </div>
            <div className='contact-container'>
                <div className='info-card'>
                    <h2 className="contact-title">{contact.title[t]}</h2>
                    <p className="contact-adress">{contact.address[t]}</p>
                    <ul className="hours-list">
                        {contact.hours[t].map((line, idx) => (
                            <li key={idx} className="hour-item">{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="form-card">
                    <p className="contact-text">{contact.content[t]}</p>
                    <form className="contact-form">
                        <input type="text" name="name" placeholder={contact.form.name[t]} />
                        <input type="email" name="email" placeholder={contact.form.email[t]} />
                        <input type="text" name="subject" placeholder={contact.form.subject[t]} />
                        <textarea name="message" placeholder={contact.form.message[t]} />
                        <button type="submit">{contact.form.submit[t]}</button>
                    </form>
                </div>
            </div>
        </section >
    );
}
