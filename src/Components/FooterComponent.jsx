import React from 'react'
import '../CSS/StyleFooter.css'
import instagram from '../Asset/icons/instagram.png'
import X from '../Asset/icons/Twitter.jpg'
import facebook from '../Asset/icons/facebook.png'
import tiktok from '../Asset/icons/tik-tok.png';
import courriel from '../Asset/icons/courriel-de-contact.png';
import { useNavigate } from 'react-router-dom'

function FooterComponent() {
    const navigate = useNavigate();

    return <>
        <footer>
            <div className="footer_partie_un">
                <div className="courriel_contact_container">
                    <img
                        src={courriel}
                        alt="icone courriel-de-contact"
                    />
                </div>
                <a onClick={() => navigate('/ContactPage')}>
                    Contactez nous
                </a>
            </div>
            <div className="footer_partie_deux">
                <p>
                    Du mardi au vendredi de 9h à 18h, le samedi de 9h à 19h et le dimanche
                    de 9h à 13h - Fermé le dimanche après-midi et les jours fériés.
                </p>
                <p>Zones de livraison : Lille et sa Métropole</p>
                <div className="mentions_legales">
                    <p>Conditions de Vente (CGV)</p>
                    <p>Charte de protection des données</p>
                    <p>Mentions légales</p>
                    <p>Politique relative aux cookies</p>
                </div>
            </div>
            <div className="reseaux_sociaux">
                <div className="resaux_container">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="icone instagram" />
                    </a>
                </div>
                <div className="resaux_container">
                    <a href="https://www.facebook.com/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="icone facebook" />
                    </a>
                </div>
                <div className="resaux_container">
                    <a href="https://www.tiktok.com/fr/" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="icone tik-tok" />
                    </a>
                </div>
                <div className="resaux_container icone_twitter" >
                    <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer">
                        <img src={X} alt="icone Twitter" />
                    </a>
                </div>
            </div>
        </footer>
    </>
}

export default FooterComponent