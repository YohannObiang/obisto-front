import React from "react";
import '../App.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Avantages = () => {
    return ( 
        <div className='Avantages'>
            <h2 style={{color:'#262D44'}}>Avantages
                
            </h2>
            <div className="avantages">
                <div className="avantage">
                    <div className="circleadvantage">
                        <WidgetsIcon sx={{fontSize:'7vw', color:'#262D44'}}/>
                    </div>
                    <strong style={{color:'#262D44'}}>Emprunter toutes choses</strong>
                    <p className="centeredText" style={{color:'#262D44'}} >Emprunter des objets au lieu d'acheter</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <SavingsIcon sx={{fontSize:'7vw', color:'#262D44'}}/>
                    </div>                    <strong style={{color:'#262D44'}}>Economiser de l'argent</strong>
                    <p className="centeredText" style={{color:'#262D44'}} >Payer moins et louer à très petit prix</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <HandshakeIcon sx={{fontSize:'7vw', color:'#262D44'}}/>
                    </div>                    <strong style={{color:'#262D44'}}>Faire louer vos biens</strong>
                    <p className="centeredText" style={{color:'#262D44'}} >Rendre lucratifs vos objets peu utilisés</p>
                </div>
                <div className="avantage">
                    <div className="circleadvantage">
                        <TrendingUpIcon sx={{fontSize:'7vw', color:'#262D44'}}/>
                    </div><strong style={{color:'#262D44'}}>Booster votre business</strong>
                    <p className="centeredText" style={{color:'#262D44'}} >Optimiser votre business de location</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Avantages;