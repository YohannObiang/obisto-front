import React from "react";
import '../App.css';
import Header from "../components/Header";
import Avantages from "../components/Avantages";
import LatestOffers from '../components/LatestOffers/LatestOffers'
import Process from "../components/Process/Process";
import Footer from "../components/footer/Footer"

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
            <Footer/>
        </div>
     );
}
 
export default Home;