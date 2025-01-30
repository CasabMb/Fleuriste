import React, { useEffect, useState } from "react";
import "../CSS/StylePopUp.css"; 

function PopUpComponent() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
                setShowPopup(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        
    };

    return (
        <>
            {showPopup && (
                <div className="popUp">
                    <div className="contenu_popUp">
                        <div className="boutton_popUp" onClick={closePopup}>
                            <img
                                className="img_croix"
                                src={require("../Asset/icons/close.png")}
                                alt="croix rouge de fermeture"
                            />
                        </div>
                        <p>
                            Profitez de la livraison gratuite pour toute commande de 80€ ou plus !
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopUpComponent;
