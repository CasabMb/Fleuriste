import React from 'react';
import '../CSS/StyleContactPage.css';
import MapComponent from '../Components/MapComponent';
import FormulaireComponent from '../Components/FormulaireComponent';

function ContactPage() {
  return <>
    <main className='contact_main'>
      <section id="contact_page">
        <FormulaireComponent />
        <MapComponent />
      </section>
    </main>
  </>;
}

export default ContactPage;
