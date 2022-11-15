import React from "react";
import './LatestOffers.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {Link } from "react-router-dom";



const LatestOffers = ({ setBorrowed}) => {

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





  const Borrow=(id_objet)=>{
    const choosenOne=Objets.filter((element,index)=>{
      return element.id_objet === id_objet});
      setBorrowed(choosenOne[0])


  };
  const [Objets, setObjets] = React.useState([]);

  React.useEffect(() => {
    getObjets();
  });

  const getObjets = async () => {
    var response = await axios.get("https://mocki.io/v1/10385da0-d991-4c3c-8c5c-4973477cd44e");
    setObjets(response.data);

  };
  var lastAdded = Objets.slice().splice(Objets.length-8).reverse();
  // illustration.src = require("../../assets/image.png");
  // document.querySelector('.img').require('../../assets/image.png')
     return ( 

        <div className="container">
        <h2>Dernières offres</h2>

        <div className="LatestOffers">
        
        {lastAdded.map((item) => {

        // const filteredstuffs=categorie.filter((element,index)=>{
        //   return element.id_Categorie === item.id_categorie });


                return(
                  <div key={item.id_objet} className='object'>
          <ThemeProvider theme={theme} >

        <Card sx={{ width: '95%', marginBottom: 1}}  key='' >
        <div className="img"
        style={{backgroundImage:`URL(./images/${item.image1})`}}
        ></div>
        <CardContent>

        
          <strong >{item.objet}</strong><br />
          
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
          <Button size="small" onClick={()=>Borrow(item.id_objet)} ><span className='text'>VOIR</span></Button>

        </Link>

        </CardActions>
          </Card>
          </ThemeProvider></div>
              )})}

          


        </div>
        </div>
     );
}
 
export default LatestOffers;