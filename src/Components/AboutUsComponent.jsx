import React from 'react';
import '../CSS/StyleAboutUs.css';
import img1 from '../Asset/Images/bouquet-hortensia-roses-gerninis.webp';
import img2 from '../Asset/Images/bouquet-germini-roses.webp';
import img3 from '../Asset/Images/bouquet-roses-tulipes.webp';
import img4 from '../Asset/Images/bouquet-gerberas-roses.webp';
import { useNavigate } from 'react-router-dom';

function AboutUsComponent() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/CompositionsPage');
        setTimeout(() => window.scrollTo(0, 0), 50);
    };
    return <>
        <section id='about_us'>
            <div className="presentation">
                <h2>
                    Notre histoire
                </h2>
                <p>
                    Bienvenue sur notre site ! Créée en Avril 2024, Sweet Blossom est née de la passion de Bloom et Rose. Ici chaque pétale est une invitation à l’émerveillement. Parcourez notre sélection exquise de compositions florales, conçues avec passion et créativité pour égayer toutes les occasions spéciales de votre vie. Que ce soit pour célébrer l’amour, l’amitié ou simplement pour ajouter une touche de beauté à votre quotidien, nos fleurs fraîches et nos arrangements artistiques sauront capturer votre cœur. Faites de chaque instant une expérience florale inoubliable avec nous, Flowers for each.
                </p>
            </div>
            <div className='livraison'>
                <h2 >Livraison fleurs en 24h</h2>
            </div>
            <div className="photos_accueil">
                <div className="accueil_img_container">
                        <img src={img1} alt="Photo d'un bouquet floral d'hortensia et de roses"/>
                </div>
                <div className="accueil_img_container">
                        <img src={img2} alt="Photo d'un bouquet floral de roses et de geminis"/>
                </div>
                <div className="accueil_img_container">
                        <img src={img3} alt="Photo d'un bouquet floral de roses, pivoines et tulipes"/>
                </div>
                <div className="accueil_img_container">
                        <img src={img4} alt="Photo d'un bouquet floral de roses et gerberas"/>
                </div>
            </div>
                <button onClick={handleNavigation}>Découvrez toutes nos compositions florales</button>
        </section>
    </>
}

export default AboutUsComponent