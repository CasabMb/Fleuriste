import React from 'react';
import '../CSS/StyleAboutUs.css';
import img12 from '../Asset/Images/IMG_12.jpg';
import img19 from '../Asset/Images/IMG_19.jpg';
import img17 from '../Asset/Images/IMG_17.jpg';
import img22 from '../Asset/Images/IMG_22.jpg';
import { useNavigate } from 'react-router-dom';

function AboutUsComponent() {
    const navigate = useNavigate();
    return <>
        <section>
            <div className="presentation">
                <h2>
                    Notre histoire
                </h2>
                <p>
                    Bienvenue sur notre site ! Créée en Avril 2024, Sweet Blossom est née de la passion de Bloom et Rose. Ici chaque pétale est une invitation à l’émerveillement. Parcourez notre sélection exquise de compositions florales, conçues avec passion et créativité pour égayer toutes les occasions spéciales de votre vie. Que ce soit pour célébrer l’amour, l’amitié ou simplement pour ajouter une touche de beauté à votre quotidien, nos fleurs fraîches et nos arrangements artistiques sauront capturer votre cœur. Faites de chaque instant une expérience florale inoubliable avec nous, Flowers for each.
                </p>
            </div>
            <div className="photos_accueil">
                <div className="accueil_img_container">
                    <a onClick={() => navigate('/CompositionsPage')}>
                        <img src={img12} alt="photo d'un bouquet de fleurs"/>
                    </a>
                </div>
                <div className="accueil_img_container">
                    <a onClick={() => navigate('/CompositionsPage')}>
                        <img src={img17} alt="photo d'un bouquet de fleurs"/>
                    </a>
                </div>
                <div className="accueil_img_container">
                    <a onClick={() => navigate('/CompositionsPage')}>
                        <img src={img19} alt="photo d'un bouquet de fleurs"/>
                    </a>
                </div>
                <div className="accueil_img_container">
                    <a onClick={() => navigate('/CompositionsPage')}>
                        <img src={img22} alt="photo d'un bouquet de fleurs"/>
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default AboutUsComponent