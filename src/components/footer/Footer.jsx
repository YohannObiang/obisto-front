import React from 'react';
import './Footer.css';
import logo from '../../assets/logo (2).png'


const Footer = () => {
    return ( 
        <div className="footer">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="rights">
                <p>
                Réalisé par <a href="https://yohannobiang.com"><strong>Yohann Obiang</strong></a><br />
                2022 Obisto Company. Tous droits reservés.
                </p>
            </div>
        </div>
     );
}
 
export default Footer;