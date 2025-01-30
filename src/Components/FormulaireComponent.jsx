import React, { useState } from "react";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

function FormulaireComponent() {
    const [formData, setFormData] = useState({
        name: "",
        first_name: "",
        email: "",
        tel: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
        if (!formData.first_name.trim()) newErrors.first_name = "Le prénom est requis.";
        if (formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {newErrors.email = "Email invalide.";}                
        if (!formData.tel.trim() || !/^\d+$/.test(formData.tel)) newErrors.tel = "Numéro de téléphone absent ou invalide.";
        if (!formData.message.trim()) newErrors.message = "Le message est requis.";
        return newErrors;
    };

    const sanitizeInput = (input) => {
        return DOMPurify.sanitize(input); // Nettoyage des champs utilisateur
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            const sanitizedData = {
                name: sanitizeInput(formData.name),
                first_name: sanitizeInput(formData.first_name),
                email: sanitizeInput(formData.email),
                tel: sanitizeInput(formData.tel),
                message: sanitizeInput(formData.message),
            };

            console.log("Formulaire valide (données sécurisées) :", sanitizedData);

            setFormData({
                name: "",
                first_name: "",
                email: "",
                tel: "",
                message: "",
            });

            toast.success("Merci pour votre message ! Nous vous contacterons sous peu.");
        }
    };

    return (
        <form id="contact_form" onSubmit={handleSubmit}>
            <h2>Nous contacter :</h2>
            <div className="input_blocks">
                <label htmlFor="name">*Nom</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="input_blocks">
                <label htmlFor="first_name">*Prénom</label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
                {errors.first_name && <p className="error">{errors.first_name}</p>}
            </div>
            <div className="input_blocks">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input_blocks">
                <label htmlFor="tel">*Téléphone</label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={handleChange}
                />
                {errors.tel && <p className="error">{errors.tel}</p>}
            </div>
            <div className="input_blocks">
                <label htmlFor="message">*Votre message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
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
    );
}

export default FormulaireComponent;
