import React from "react";
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom";


const Header = ({setSearchTerm, handleSearchTerm}) => {
    var code = Math.floor(Math.random()*5)
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
      }
      const bg = ['bgheader.png', 'fifa2.jpeg', 'iphoneX.jpg', 'Vintage.jpg', 'Tondeuse.jpg']
    return ( 
        <div className='Home'>
        
        
            <header className="header"         style={{backgroundImage:`URL(https://photouploadobisto.onrender.com/bg/${bg[code]})`}}
>
                <div className="headerContent">
                    <h1 style={{textAlign: 'center'}}>Pourquoi acheter quand on peut emprunter?</h1>
                    <div  className='searchbox'>
                        
                        <input  type="search" onChange={handleChange} placeholder="Qu'est-ce que vous recherchez?" name="" id="inputsearch" className="inputsearch"/>
                        <Link to="/recherche" className='searchBtn' onClick={handleSearchTerm}>
                            
                                <SearchIcon sx={{color:'#262D44'}}/>
                        </Link>
                    </div>
                </div>
            </header>
            
        </div>
     );
}
 
export default Header;