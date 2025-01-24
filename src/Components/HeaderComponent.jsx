import Logo from '../Asset/Images/logosb.png';
import { useNavigate } from 'react-router-dom';
import '../CSS/StyleHeader.css';
import icone_menu from '../Asset/icons/icone_menu.png';
import { useState } from 'react';

function HeaderComponent() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState); 
    };

    return<>
        <header id="haut_de_page">
            <div id="logo_container">
                <img
                    src={Logo}
                    alt="logo avec les initiales SB sweet blossom"
                />
            </div>
            <div className={`header-links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => { navigate('/'); setMenuOpen(false); }}>
                        Accueil
                    </li>
                    <li onClick={() => { navigate('/CompositionsPage'); setMenuOpen(false); }}>
                        Nos compositions
                    </li>
                    <li onClick={() => { navigate('/LangagePage'); setMenuOpen(false); }}>
                        Langage des fleurs
                    </li>
                    <li onClick={() => { navigate('/ContactPage'); setMenuOpen(false); }}>
                        Contactez-nous
                    </li>
                </ul>
            </div>
            <div className="icone_menu">
                <img
                    src={icone_menu}
                    alt="icone menu"
                    onClick={toggleMenu} 
                />
            </div>
        </header>
    </>;
}

export default HeaderComponent;
