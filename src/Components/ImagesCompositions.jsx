import React from 'react'

const bouquets = [
    {
        id: 1,
        name: "Tulipea",
        composition: "tulipes et feuilles d'eucalyptus",
        colors: "blanc, rouge",
        price: 45,
        image: require("../Asset/Images/IMG_2.jpg"),
    },
    {
        id: 2,
        name: "Rêve blanc",
        composition: "gerberas et roses",
        colors: "blanc",
        price: 58,
        image:  require("../Asset/Images/IMG_17.jpg"),
    },
    {
        id: 3,
        name: "Primavera",
        composition: "fleurs sauvages et pivoines",
        colors: "jaune, violet",
        price: 50,
        image:  require("../Asset/Images/IMG_19.jpg"),
    },
    {
        id: 4,
        name: "Lizzy",
        composition: "roses, germinis et pivoines",
        colors: "orange",
        price: 67,
        image:  require("../Asset/Images/IMG_14.jpg"),
    },
    {
        id: 5,
        name: "Duchesse",
        composition: "roses et germinis",
        colors: "jaune",
        price: 60,
        image:  require("../Asset/Images/IMG_4.jpg"),
    },
    {
        id: 6,
        name: "Agate",
        composition: "roses",
        colors: "blanc, rust",
        price: 65,
        image:  require("../Asset/Images/IMG_1.jpg"),
    },
    {
        id: 7,
        name: "Venus",
        composition: "roses et tulipes",
        colors: "jaune, rose",
        price: 57,
        image:  require("../Asset/Images/IMG_11.jpg"),
    },
    {
        id: 8,
        name: "Rosine",
        composition: "roses, hortensias et germinis",
        colors: "rose",
        price: 70,
        image:  require("../Asset/Images/IMG_12.jpg"),
    },
    {
        id: 9,
        name: "Eden",
        composition: "orchidées et feuilles tropicales",
        colors: "vert, violet",
        price: 85,
        image:  require("../Asset/Images/IMG_20.jpg"),
    },
    {
        id: 10,
        name: "Jasminée",
        composition: "jasmin et roses",
        colors: "blanc, rose",
        price: 60,
        image:  require("../Asset/Images/IMG_21.jpg"),
    },
    {
        id: 11,
        name: "Corail",
        composition: "gerberas et roses",
        colors: "orange, rose",
        price: 48,
        image:  require("../Asset/Images/IMG_22.jpg"),
    },
    {
        id: 12,
        name: "Aurora",
        composition: "lys et hortensias",
        colors: "blanc, bleu",
        price: 75,
        image:  require("../Asset/Images/IMG_3.jpg"),
    },
    {
        id: 13,
        name: "Lumineux",
        composition: "tournesols et marguerites",
        colors: "jaune, blanc",
        price: 55,
        image:  require("../Asset/Images/IMG_24.jpg"),
    },
    {
        id: 14,
        name: "Émeraude",
        composition: "roses et feuilles tropicales",
        colors: "vert, blanc",
        price: 72,
        image:  require("../Asset/Images/IMG_25.jpg"),
    },
    {
        id: 15,
        name: "Bohème",
        composition: "fleurs séchées",
        colors: "beige, marron",
        price: 40,
        image:  require("../Asset/Images/IMG_26.jpg"),
    },
    {
        id: 16,
        name: "Romance",
        composition: "roses rouges",
        colors: "rouge",
        price: 80,
        image:  require("../Asset/Images/IMG_27.jpg"),
    },
    {
        id: 17,
        name: "Flocon",
        composition: "lys blancs et gypsophile",
        colors: "blanc",
        price: 62,
        image:  require("../Asset/Images/IMG_16.jpg"),
    },
    {
        id: 18,
        name: "Soleil levant",
        composition: "orchidées et lys jaunes",
        colors: "jaune, blanc",
        price: 78,
        image:  require("../Asset/Images/IMG_8.jpg"),
    },
    {
        id: 19,
        name: "Passion",
        composition: "roses rouges et pivoines",
        colors: "rouge, rose",
        price: 85,
        image:  require("../Asset/Images/IMG_6.jpg"),
    },
    {
        id: 20,
        name: "Ambre",
        composition: "fleurs de saison",
        colors: "orange, jaune",
        price: 55,
        image:  require("../Asset/Images/IMG_4.jpg"),
    },
];



function ImagesCompositions() {
    return <>
        <section className="compositions">
            <div className="bouquets">
                {bouquets.map(bouquet => (
                    <div className="bouquet" key={bouquet.id}>
                        <div className="bouquet_img_container">
                            <img
                                src={bouquet.image}
                                alt={`Bouquet ${bouquet.name} composé de ${bouquet.composition}. Parfait pour les occasions spéciales.`}
                                />
                        </div>
                        <div className="text_img_bouquet">
                            <p>{bouquet.name}</p>
                            <p><span className="texte_souligné">Composition:</span> {bouquet.composition}</p>
                            <p><span className="texte_souligné">Couleurs principales:</span> {bouquet.colors}</p>
                            {/* <p>Prix: {bouquet.price}€</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>;
}


export default ImagesCompositions