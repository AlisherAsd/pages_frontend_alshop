import React from 'react';
import cl from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <span className={cl.Span}>Контакты: </span>
                <span className={cl.Span}>tg.me@alisherasd</span>
                <span className={cl.Span}>alishersharipovtol@gmail.com</span>
                <span className={cl.Span}>© 2006—2024 AO"ALSHOP"</span>
                <span className={cl.Span}>Technologies: express, sequilize, postgres, react, mobx, bootstrap</span>
            </div>
            
        </footer>
    );
};

export default Footer;