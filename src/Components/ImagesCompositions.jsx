import React from 'react'

const bouquets = [
    {
        id: 1,
        name: "Tulipea",
        composition: "tulipes et feuilles d'eucalyptus",
        colors: "blanc, rouge",
        price: 45,
        image: require("../Asset/Images/bouquet-tulipes.webp"),
    },
    {
        id: 2,
        name: "Rêve blanc",
        composition: "gerberas et roses",
        colors: "blanc",
        price: 58,
        image:  require("../Asset/Images/bouquet-germini-roses.webp"),
    },
    {
        id: 3,
        name: "Primavera",
        composition: "Tulipes et pivoines et fleurs sauvages",
        colors: "rose",
        price: 50,
        image:  require("../Asset/Images/bouquet-roses-tulipes.webp"),
    },
    {
        id: 4,
        name: "Lizzy",
        composition: "roses, germinis et pivoines",
        colors: "orange",
        price: 67,
        image:  require("../Asset/Images/bouquet-roses-germinis-pivoines.webp"),
    },
    {
        id: 5,
        name: "Duchesse",
        composition: "roses et germinis",
        colors: "jaune ",
        price: 60,
        image:  require("../Asset/Images/bouquet-roses-jaune.webp"),
    },
    {
        id: 6,
        name: "Agate",
        composition: "roses",
        colors: "blanc, rust",
        price: 65,
        image:  require("../Asset/Images/bouquet-roses-lys.webp"),
    },
    {
        id: 7,
        name: "Venus",
        composition: "roses et tulipes",
        colors: "jaune, rose",
        price: 57,
        image:  require("../Asset/Images/bouquet-roses-gerberas.webp"),
    },
    {
        id: 8,
        name: "Rosine",
        composition: "roses, hortensias et germinis",
        colors: "rose",
        price: 70,
        image:  require("../Asset/Images/bouquet-hortensia-roses-gerninis.webp"),
    },
    {
        id: 9,
        name: "Hortensia",
        composition: "hortensia, roses et feuilles de remplissage",
        colors: "bleu, violet",
        price: 85,
        image:  require("../Asset/Images/bouquet-hortensia-roses.webp"),
    },
    {
        id: 10,
        name: "Eden",
        composition: "hortensia et tulipes",
        colors: "blanc, bleu, violet",
        price: 60,
        image:  require("../Asset/Images/bouquet-hortensia-tulipes.webp"),
    },
    {
        id: 11,
        name: "Flocon",
        composition: "gerberas et roses",
        colors: "blanc, bleu",
        price: 48,
        image:  require("../Asset/Images/bouquet-gerberas-roses.webp"),
    },
    {
        id: 12,
        name: "Aurora",
        composition: "lys blanche",
        colors: "blanc, bleu",
        price: 75,
        image:  require("../Asset/Images/bouquet-lys.webp"),
    },
    {
        id: 13,
        name: "Eveil du printemps",
        composition: "Roses , gerberas et orchidees",
        colors: "rose, orange,bleu",
        price: 55,
        image:  require("../Asset/Images/bouquet-roses-gerberas-orchidees.webp"),
    },
    {
        id: 14,
        name: "Lumineuse",
        composition: "tulipes et feuilles de remplissage",
        colors: "orange",
        price: 72,
        image:  require("../Asset/Images/bouquet-tulipes-orange.webp"),
    },
    {
        id: 15,
        name: "Bohème",
        composition: "roses, lys",
        colors: "beige, rose",
        price: 40,
        image:  require("../Asset/Images/bouquet-roses-lys-bohème.webp"),
    },
    {
        id: 16,
        name: "Romance",
        composition: "roses, hortensia",
        colors: "orange, blanc",
        price: 80,
        image:  require("../Asset/Images/bouquet-roses-hortensia.webp"),
    },
    {
        id: 17,
        name: "Passion",
        composition: "renoncules, pivoines et proteas",
        colors: "rose",
        price: 62,
        image:  require("../Asset/Images/bouquet-renoncules-pivoines-proteas.webp"),
    },
    {
        id: 18,
        name: "Soleil levant",
        composition: "tulipes, anemones, renoncules, roses, freesias",
        colors: "jaune, blanc",
        price: 78,
        image:  require("../Asset/Images/bouquet-tulipes-anemones-renoncules-roses-freesias.webp"),
    },
    {
        id: 19,
        name: "Jardin d'espérance",
        composition: "jonquille, mimosa, muscari",
        colors: "blanc, jaune",
        price: 85,
        image:  require("../Asset/Images/bouquet-jonquille-mimosa-muscari.webp"),
    },
    {
        id: 20,
        name: "Harmonie",
        composition: "roses violettes, feuilles de remplissage",
        colors: "violet",
        price: 55,
        image:  require("../Asset/Images/bouquet-roses.webp"),
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