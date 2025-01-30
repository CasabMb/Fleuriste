import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import AboutUsComponent from '../Components/AboutUsComponent'
import { Helmet } from 'react-helmet'

function HomePage() {
  return <>
    <Helmet>
      <title>Sweet Blossom - Compositions florales uniques</title>
      <meta
        name="description"
        content="Découvrez Sweet Blossom, un artisan floral passionné proposant des bouquets élégants pour toutes les occasions. Fête des mères, mariages, anniversaires : chaque création est unique."
      />
      <meta
        name="keywords"
        content="fleurs, compositions florales, bouquets, Sweet Blossom, fête des mères, mariage, roses, fleurs fraîches"
      />
      <meta name="author" content="Sweet Blossom" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <main id='home_page'>
      <h1>Bienvenue sur Sweet Blossom</h1>
      <HeroComponent />
      <AboutUsComponent />

    </main>
  </>
}

export default HomePage