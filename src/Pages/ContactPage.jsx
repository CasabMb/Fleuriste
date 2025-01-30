import React from 'react';
import '../CSS/StyleContactPage.css';
import MapComponent from '../Components/MapComponent';
import FormulaireComponent from '../Components/FormulaireComponent';
import { Helmet } from 'react-helmet';

function ContactPage() {
  return <>
    <Helmet>
      <title>Sweet Blossom - Contactez-nous</title>
      <meta
        name="description"
        content="Contactez Sweet Blossom pour toutes vos questions sur nos compositions florales, commandes, ou événements spéciaux. Nous sommes là pour vous aider !"
      />
      <meta
        name="keywords"
        content="contact, Sweet Blossom, fleurs, compositions florales, questions, service client"
      />
      <meta name="author" content="Sweet Blossom" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <main className='contact_main'>
      <div className='contact_text'>
        <h1>Contactez Sweet Blossom : Nous sommes à votre écoute !</h1>
        <p>Vous avez une question, une demande particulière ou souhaitez en savoir plus sur nos compositions florales ? L’équipe de Sweet Blossom est à votre écoute pour répondre à toutes vos attentes. Que ce soit pour un événement spécial – mariage, baptême, anniversaire – ou pour toute autre événement, contactez-nous via notre formulaire, par téléphone ou rendez-nous visite directement.</p>
      </div>
      <section id="contact_page">
        <FormulaireComponent />
        <MapComponent />
      </section>
    </main>
  </>;
}

export default ContactPage;
