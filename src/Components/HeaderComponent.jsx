import React from 'react'
import Logo from '../Asset/Images/logosb.png'
import { useNavigate } from 'react-router-dom';
import '../CSS/StyleHeader.css';

function HeaderComponent() {

const navigate = useNavigate();

return <>
    <header id="haut_de_page">
        <div id="logo_container">
            <img
                src={Logo}
                alt="logo avec les initiales SB sweet blossom"
            />
        </div>
        <div className='header-links'>
            <ul>
                <li onClick={() => navigate('/')}>
                    Accueil
                </li>
                <li onClick={() => navigate('/CompositionsPage')}>
                    Nos compositions
                </li>
                <li>
                    Langage des fleurs
                </li>
                <li onClick={() => navigate('/ContactPage')}>
                    Contactez nous
                </li>
                
            </ul>
        </div>
        
    </header>
</>
}

export default HeaderComponent