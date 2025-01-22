import React from 'react'
import '../CSS/StyleCompositions.css'
import ImagesCompositions from '../Components/ImagesCompositions'
import { Helmet } from 'react-helmet'

function CompositionsPage() {
    return <>
        <Helmet>
            <title>Compositions florales uniques et élégantes</title>
            <meta name="description" content="Découvrez notre collection de compositions florales uniques, parfaites pour toutes les occasions. Explorez nos bouquets soigneusement sélectionnés." />
            <meta name="keywords" content="compositions florales, bouquets, fleurs, décoration, cadeaux, compositions élégantes" />
            <meta name="author" content="SweetBlossom" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://www.sweetblossom.com/compositions" />

            <meta property="og:title" content="Compositions florales uniques et élégantes" />
            <meta property="og:description" content="Découvrez une large sélection de bouquets uniques pour sublimer vos moments spéciaux." />
            <meta property="og:image" content="https://www.sweetblossom.com/Asset/Imagesog-image-compositions.jpg" />
            <meta property="og:url" content="https://www.sweetblossom.com/compositions" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Compositions florales uniques et élégantes" />
            <meta name="twitter:description" content="Découvrez une large sélection de bouquets uniques pour sublimer vos moments spéciaux." />
            <meta name="twitter:image" content="https://www.sweetblossom.com/Asset/Images/twitter-image-compositions.jpg" />
            <meta name="twitter:site" content="@SweetBlossom" />
        </Helmet>
        <main className='page_compositions'>
            <h1 className='titre_page_compositions'>Découvrez nos compositions florales uniques</h1>
            <p className='description_page_compositions'>Explorez notre sélection de bouquets, parfaits pour offrir à vos proches ou embellir vos espaces</p>
            <section>
                <ImagesCompositions />
            </section>
        </main>
    </>
}

export default CompositionsPage