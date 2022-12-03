import React from "react";
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom";


const Header = ({setSearchTerm, handleSearchTerm}) => {
    var code = Math.floor(Math.random()*3)
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
      }
      const bg = ['imgpog2.jpg', 'imgpog3.jpeg', 'jbl.jfif']
    return ( 
        <div className='Home'>
            <header className="header" style={{backgroundImage:`URL(https://photouploadobisto.onrender.com/bg/${bg[code]})`}}>


            <div class="s013" style={{background: 'rgba(0, 0, 0, 0.502)'}}>
      <form>
        <fieldset>
          <legend>POURQUOI ACHETER QUAND ON PEUT EMPRUNTER?</legend>
        </fieldset>
        <div class="inner-form">
          <div class="left">
            <div class="input-wrap first">
              <div class="input-field first">
                <label>DE QUOI AVEZ VOUS BESOIN ?</label>
                <input type="text" onChange={handleChange} placeholder="ex: Playstation 4, Speaker, Perceuse, Mixeur" />
              </div>
            </div>
            <div class="input-wrap second">
              <div class="input-field second">
                <label>VILLE</label>
                <div class="input-select" style={{padding:0, outline:'none'}}>
                  <select className="choices__inner" style={{outline:'none'}} data-trigger=""  name="choices-single-defaul">
                    <option placeholder="">Port-gentil</option>
                    
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Link to="/recherche" class="btn-search" style={{padding:0}} onClick={handleSearchTerm}>

          <button  class="btn-search" type="button" style={{color:'#262D44'}}>Rechercher</button>
          </Link>

        </div>
      </form>
    </div>



                {/* <div className="headerContent">
                    <h1 style={{textAlign: 'center'}}>Pourquoi acheter quand on peut emprunter?</h1>
                    <div  className='searchbox'>
                        <input  type="search" onChange={handleChange} placeholder="Qu'est-ce que vous recherchez?" name="" id="inputsearch" className="inputsearch"/>
                        <Link to="/recherche" className='searchBtn' onClick={handleSearchTerm}>
                            <SearchIcon sx={{color:'#262D44'}}/>
                        </Link>
                    </div>
                </div> */}
            </header>
        </div>
     );
}
 
export default Header;