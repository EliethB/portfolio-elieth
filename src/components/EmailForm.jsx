import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const serviceID = "service_65co8uk";
        const templateID = "template_rxfox0e";
        const KeyID = "7KUHmRs4MLlX1GCrB";
    
        emailjs.sendForm(serviceID, templateID, refForm.current, KeyID)
        .then(result => {
            if (result.status === 200) {
                setSuccess(true);
                refForm.current.reset(); // Limpia el formulario
            } else {
                throw new Error('Error en el envío del correo');
            }
        })
        .catch(error => console.error(error));
    };
    
    return (
        <div className="w-full max-w-2xl mx-auto p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Send me an email</h2>
            {success && <p className="text-green-500 mb-2">Correo enviado exitosamente!</p>}
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form ref={refForm} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <fieldset>
                    <label className="block text-sm font-medium mb-1 text-white">Email:</label>
                    <input
                        type="email"
                        name='email'
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                    <label className="block text-sm font-medium mb-1 text-white">Subject:</label>
                    <input
                        type="text"
                        name='asunto'
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                    <label className="block text-sm font-medium mb-1 text-white">Message:</label>
                    <textarea
                        name='message'
                        required
                        className="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </fieldset>
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white font-bold py-3 rounded-md hover:bg-[#009B77] focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default EmailForm;
