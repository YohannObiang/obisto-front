import React from "react";
import './Categorie.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {Link } from "react-router-dom";




const Categorie = ({IdCategorie, setBorrowed}) => {

  const theme = createTheme({
    palette: {
      primary: {
  
        main: '#000',
  
      },
      secondary: {
  
        main: '#8AE0AA',
        
      },
    },
  });
  const [Objets, setObjets] = React.useState([]);

  React.useEffect(() => {
    getObjets();
  }, []);
 

  const getObjets = async () => {
    var response = await axios.get("https://mocki.io/v1/10385da0-d991-4c3c-8c5c-4973477cd44e");
    setObjets(response.data);

  };


    const filteredstuffs=Objets.filter((element,index)=>{
      return element.Categorie === IdCategorie });

      const Borrow=(id_objet)=>{
        const choosenOne=filteredstuffs.filter((element,index)=>{
          return element.id_objet === id_objet});
          setBorrowed(choosenOne[0])
    
    
      };



      const [PriceFilter, setPriceFilter] = React.useState([]);

      
      

      const handleChangePrix = (event) => {
        // document.getElementById('somecategorystuffs').style.display='grid';
        // document.getElementById('allcategorystuffs').style.display='none';
        if(event.target.value == 0){
        setPriceFilter(filteredstuffs);
      }
      if(event.target.value == 1){
        var filteredData = filteredstuffs.filter(item => item.prix_jour < 2501 && item.prix_jour > -1);
        setPriceFilter(filteredData);
      }
      if(event.target.value == 2){
        var filteredData = filteredstuffs.filter(item => item.prix_jour < 5001 && item.prix_jour > 2500);
        setPriceFilter(filteredData);
      }
      if(event.target.value == 3){
        var filteredData = filteredstuffs.filter(item => item.prix_jour < 10001 && item.prix_jour > 5000);
        setPriceFilter(filteredData);
      }
      if(event.target.value == 4){
        var filteredData = filteredstuffs.filter(item => item.prix_jour < 20001 && item.prix_jour > 10000);
        setPriceFilter(filteredData);
      }
      if(event.target.value == 5){
        var filteredData = filteredstuffs.filter(item => item.prix_jour < 30001 && item.prix_jour > 20000);
        setPriceFilter(filteredData);
      }
      if(event.target.value == 6){
        var filteredData = filteredstuffs.filter(item => item.prix_jour > 30000);
        setPriceFilter(filteredData);
      }
    
        // if(Prix === 2){
        //   var filteredData = filteredstuffs.filter(item => item.prix >= 2501 && item.prix <= 5000);
        // setfilteredstuffs(filteredData);
        // }
      };
    
 
    return ( 

        <div className="container">
        <h2>{IdCategorie}</h2>
        <div className="filter">

             <select name="" id="price"  onChange={handleChangePrix}>
                <option value={0}>--- Prix --- (fcfa)</option>
                <option value={1}>0 - 2500</option>
                <option value={2}>2501 - 5000</option>
                <option value={3}>5001 - 10000</option>
                <option value={4}>10001 - 20000</option>
                <option value={5}>20001 - 30000</option>
                <option value={6}>Plus de 30000</option>
            </select>
            

        </div>
        <div id='allcategorystuffs' className="LatestOffers">
        {filteredstuffs.map((item) => {


// var cate = filteredstuffs

              return(
                <div key={item.id_objet} className='object'>

        <ThemeProvider theme={theme}>

      <Card sx={{ width: '95%', marginBottom: 1}}  key='' >
      <div className="img"
      style={{backgroundImage:`URL(./images/${item.image1})`}}
      ></div>
      <CardContent>

      
        <strong  >{item.objet}</strong><br />
        
        <Typography className='text'  variant="text" color="text.secondary">
        {item.Categorie} 
        </Typography>

        <br />
        <Typography  variant="h7" className='text'>
        {item.prix_jour} fcfa /Jour
        </Typography>
      </CardContent>
      <Divider/>

      <CardActions>
      <Link to="/Validation">
        <Button size="small" variant="contained" color='secondary' onClick={()=>Borrow(item.id_objet)} > <strong className='text'>Emprunter</strong></Button>
      </Link>
      <Link to="/Details">
        <Button size="small" onClick={()=>Borrow(item.id_objet)}><span className='text'>VOIR</span></Button>

      </Link>
      </CardActions>
        </Card>
        </ThemeProvider>
        </div>
            )})}

        
        </div>
        <div id='somecategorystuffs' className="LatestOffers">
        {PriceFilter.map((item) => {


// var cate = filteredstuffs

              return(
                <div key={item.id_objet} className='object'>

        <ThemeProvider theme={theme}>

      <Card sx={{ width: '95%', marginBottom: 1}}  key='' >
      <div className="img"
      style={{backgroundImage:`URL(./images/${item.image1})`}}
      ></div>
      <CardContent>

      
        <strong  >{item.objet}</strong><br />
        
        <Typography className='text'  variant="text" color="text.secondary">
        {item.Categorie} 
        </Typography>

        <br />
        <Typography  variant="h7" className='text'>
        {item.prix_jour} fcfa /Jour
        </Typography>
      </CardContent>
      <Divider/>

      <CardActions>
      <Link to="/Validation">
        <Button size="small" variant="contained" color='secondary' onClick={()=>Borrow(item.id_objet)} > <strong className='text'>Emprunter</strong></Button>
      </Link>
      <Link to="/Details">
        <Button size="small" onClick={()=>Borrow(item.id_objet)}><span className='text'>VOIR</span></Button>

      </Link>
      </CardActions>
        </Card>
        </ThemeProvider>
        </div>
            )})}

        
        </div>
        </div>
     );
}
 
export default Categorie;