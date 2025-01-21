import React from "react";
import GoogleMapImage from "../Asset/Images/Google_map.png";

function MapComponent() {
    return <>
        <section id="map_adress">
            <div className="map_container">
                <img
                    src={GoogleMapImage}
                    alt="Carte indiquant où se trouve Sweet Blossom"
                />
            </div>
            <div id="block_adress">
                <p> <span>Sweet Blossom</span> </p>
                <p> <span>393, Rue du Général de Gaulle</span> </p>
                <p> <span>59700 MARCQ-EN-BAROEUL</span> </p>
                <p>Tél : 03 20 74 87 30</p>
                <p>email : sweetblossom@gmail.com</p>
                <p id="opening_days">
                    Du mardi au vendredi de 9h à 18h, le samedi de 9h à 19h et le
                    dimanche de 9h à 13h
                </p>
            </div>
        </section>
    </>;
}

export default MapComponent;
