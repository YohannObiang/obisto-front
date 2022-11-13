import React from "react";
import '../App.css';
import Header from "../components/Header";
import Avantages from "../components/Avantages";
import LatestOffers from '../components/LatestOffers/LatestOffers'
import Process from "../components/Process/Process";


const Home = ({Objets, setSearchTerm,handleSearchTerm, setBorrowed}) => {
    return ( 
        <div className='Home'>
            <Header 
            setSearchTerm={setSearchTerm}
            handleSearchTerm={handleSearchTerm}
            />
            <Avantages/>
            <LatestOffers 
            Objets={Objets}
            setBorrowed={setBorrowed}
            />
            <Process/>
        </div>
     );
}
 
export default Home;