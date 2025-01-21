import React from "react";

function FormulaireComponent() {
    return <>
        <form id="contact_form">
            <h2>Nous contacter :</h2>
            <div className="input_blocks">
                <label htmlFor="name">*Nom</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="input_blocks">
                <label htmlFor="first_name">*Prénom</label>
                <input type="text" name="first_name" id="first_name" required />
            </div>
            <div className="input_blocks">
                <label htmlFor="email">*Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="input_blocks">
                <label htmlFor="tel">Téléphone</label>
                <input type="tel" name="tel" id="tel" />
            </div>
            <div className="input_blocks">
                <label htmlFor="demand">*Votre demande concerne</label>
                <select id="demand" required>
                    <option value="select">Sélectionner</option>
                    <option value="order">Renseignement</option>
                    <option value="quotation">Demande de devis</option>
                    <option value="others">Autres</option>
                </select>
            </div>
            <div className="input_blocks">
                <div id="block_message">
                    <label htmlFor="message">Votre message</label>
                    <textarea id="message"  rows="5"></textarea>
                </div>
            </div>
            <div className="input_blocks join_files">
                <label htmlFor="join_files">Pièces jointes</label>
                <input type="file" name="file" id="file" />
            </div>
            <div className="input_blocks">
                <div id="validation_block">
                    <p id="required_fields">*Champs obligatoires</p>
                    <button id="validation" type="submit">
                    VALIDER
                    </button>
                </div>
            </div>
        </form>
    </>;
}

export default FormulaireComponent;
