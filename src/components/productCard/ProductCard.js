import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import './productCard.css';

export default function ProductCard({ product }) {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { allergens, ingredients } = pageTexts.pages.menu;

    const data = product.translations[t];
    const price = typeof product.prix === 'number'
        ? product.prix.toFixed(2).replace('.', ',') + ' €'
        : product.prix;

    return (
        <div className="product-card">
            <img src={product.image} alt={data.nom} className="product-image" />

            <div className="product-info">
                <h3 className="product-name">{data.nom}</h3>
                <p className="product-description">{data.description}</p>

                <div className="product-details">
                    <div className="ingredients">
                        <strong>{allergens[t]}</strong>
                        <ul>
                            {data.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>

                    {data.allergenes?.length > 0 && (
                        <div className="allergenes">
                            <strong>{ingredients[t]}</strong>
                            <ul>
                                {data.allergenes.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <p className="product-price">{price}</p>
            </div>
        </div>
    );
}
