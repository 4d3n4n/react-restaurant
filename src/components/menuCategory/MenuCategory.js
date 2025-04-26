import React from 'react';
import menuData from '../../data/menuData';
import ProductCard from '../productCard/ProductCard';
import './menuCategory.css';

export default function MenuCategory({ categories }) {
    const items = menuData.filter(item =>
        categories.includes(item.translations.fr.categorie)
    );

    return (
        <div className="menu-category">
            {items.map(item => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
}
