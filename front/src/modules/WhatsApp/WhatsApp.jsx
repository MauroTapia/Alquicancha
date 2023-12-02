import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import './custom.css';


const SendMessage = () => {

    return (
        
        <WhatsAppWidget        
            message={`Hola! s👋🏼 \n\nEn qué puedo ayudarte?`}
            phoneNumber="541165492709"
        />
    );
};

export default SendMessage;
