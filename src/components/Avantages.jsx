import React from "react";
import '../App.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Avantages = () => {
    return ( 
        <div className='Avantages'>
            <div className="avantages">
                <div className="avantage">
                    <div className="circleadvantage">
                        <WidgetsIcon sx={{fontSize:'7vw'}}/>
                    </div>
                    <strong>Emprunter toutes choses</strong>
                    <p className="centeredText" >Emprunter des objets au leu d'acheter</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <SavingsIcon sx={{fontSize:'7vw'}}/>
                    </div>                    <strong>Economiser de l'argent</strong>
                    <p className="centeredText" >Payer moins et louer à tres petit prix</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <HandshakeIcon sx={{fontSize:'7vw'}}/>
                    </div>                    <strong>Faire louer ses biens</strong>
                    <p className="centeredText" >Rendre lucratifs ses objets peu utilisés</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <TrendingUpIcon sx={{fontSize:'7vw'}}/>
                    </div><strong>Booster son business</strong>
                    <p className="centeredText" >Optimiser son business de location</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Avantages;