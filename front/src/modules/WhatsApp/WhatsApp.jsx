import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import './whatsApp.css';


const SendMessage = () => {


    return (
        <><div id="soporte"></div>
            <WhatsAppWidget

            message={`Hola! 👋🏼 \nEn qué puedo ayudarte?`}
            phoneNumber="541165492709" /></>
    );
};

export default SendMessage;
