import React from 'react';
import '../CSS/StyleHero.css';
import bouquet_fete_des_meres from '../Asset/Images/bouquet_fete_des_meres.jpg'

function HeroComponent() {
    return <>
        <section className="hero">
            <div className="text_hero">
                <h1>Offrez un bouquet inoubliable pour la fête des mères</h1>
                <p>Exprimez votre amour avec élégance grâce à nos créations florales uniques. Faites de cette journée une célébration mémorable pour toutes les mamans.</p>
            </div>
            <div className="hero_hover">
                <div className="hero_img_container">
                    <img
                        src={bouquet_fete_des_meres}
                        alt="bouquet coloré composé de fleursvariées"
                    />
                </div>
                <div className="description_img">
                    <p>Bouquet composé de rose et de tulipe.</p>
                    <p>Couleurs principales: orange et rose.</p>
                    
                </div>
            </div>
        </section>
    </>
}

export default HeroComponent