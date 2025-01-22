import React from 'react'
import '../CSS/StyleLangageDesFleurs.css';
import pivoine from '../Asset/Images/pivoine.jpg';
import lisantus from '../Asset/Images/lisianthus.jpg';
import rose from '../Asset/Images/rose.png';
import hortensia from '../Asset/Images/hortensia.png';
import germini from '../Asset/Images/germini.jpg';
import tulipe from '../Asset/Images/tulipe.jpg';
import { Helmet } from 'react-helmet';

function LangagePage() {
    return <>
        <Helmet>
            <title>Langage des fleurs - Sweet Blossom</title>
            <meta name="description" content="Découvrez la signification et le langage des fleurs comme la pivoine, le lisianthus, la rose, l'hortensia, le germini, et la tulipe. Chaque fleur a une histoire à raconter." />
            <meta name="keywords" content="langage des fleurs, pivoine, lisianthus, rose, hortensia, germini, tulipe, signification des fleurs, Sweet Blossom" />
            <meta property="og:title" content="Langage des fleurs - Sweet Blossom" />
            <meta property="og:description" content="Explorez la beauté et les significations uniques de chaque fleur. Parfait pour choisir la fleur qui transmet vos émotions." />
            <meta property="og:image" content={pivoine} />
            <meta property="og:url" content="https://www.sweetblossom.com/langage-des-fleurs" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        <section class="section">
            <div className='section_items'>
                <div className='img_container'>
                    <img src={pivoine} alt="Pivoine rose"/>
                </div>
                <div className="description">
                    <h2>La Pivoine</h2>
                    <p>
                        Délicate et pleine de grâce, la pivoine se décline en mille émotions. La rose murmure une timidité naissante, 
                        tandis que la rouge s’enflamme dans une passion ardente. Le mauve célèbre l’amitié sincère, 
                        et la blanche offre un merci du fond du cœur, un éclat de reconnaissance à un être cher.
                    </p>
                </div>
            </div>
                <div className='section_items'>
                    <div className='img_container'>
                        <img  src={lisantus} alt="Lisantus"/>   
                    </div>
                    <div className="description">
                        <h2>Le Lisianthus</h2>
                        <p>
                            Élégant et raffiné, le lisianthus incarne le respect et la gratitude. 
                            Parfait pour témoigner d’une admiration discrète, il illumine les bouquets de mariée 
                            et apporte une touche champêtre empreinte de douceur.
                        </p>
                    </div>
                </div>
            
                <div className='section_items'>
                    <div className='img_container'>
                        <img  src={rose} alt="Rose"/>   
                    </div>
                    <div class="description">
                        <h2>La Rose</h2>
                        <p>
                            Incontournable reine des fleurs, la rose porte mille messages. La rose rose caresse l’amitié et la tendresse, 
                            la blanche éclaire la pureté et l’amour parfait, et l’orange danse dans une joie éclatante. 
                            Offrez une rose et laissez parler votre cœur.
                        </p>
                    </div>
                </div>
            
                <div className='section_items'>
                    <div className='img_container'>
                        <img  src={hortensia} alt="Hortensia"/>     
                    </div>
                    <div class="description">
                        <h2>L'Hortensia</h2>
                        <p>
                            Multicolore et mystérieux, l’hortensia est une fleur des émotions profondes. 
                            Le rose chuchote un amour sincère, le blanc respire la paix et l’innocence, 
                            le bleu évoque le souvenir et la mélancolie, et le violet s’empreint d’un doux recueillement.
                        </p>
                    </div>
                </div>
            
                <div className='section_items'>
                    <div className='img_container'>
                        <img  src={germini} alt="Le Germini"/> 
                    </div>
                    <div class="description">
                        <h2>Le Germini</h2>
                        <p>
                            Petite étoile solaire, le germini est l’incarnation de la joie et de la vitalité. 
                            Sa lumière vive illumine les cœurs et diffuse une énergie positive et contagieuse, 
                            un éclat de bonheur à chaque regard.
                        </p>
                    </div>
                </div>
            
                <div className='section_items'>
                    <div className='img_container'>
                        <img  src={tulipe} alt="La Tulipe"/>    
                    </div>
                    <div class="description">
                        <h2>La Tulipe</h2>
                        <p>
                            Élégante et intemporelle, la tulipe raconte l’amour sous toutes ses formes. 
                            Rouge pour la passion, blanche pour la sincérité, elle exprime des sentiments 
                            profonds et universels avec une simplicité désarmante.
                        </p>
                    </div>
                </div>
        </section>
    </>
}

export default LangagePage