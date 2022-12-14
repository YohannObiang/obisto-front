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
  },[]);

  const getObjets = async () => {
    var response = await axios.get("https://photouploadobisto.onrender.com/objets");
    setObjets(response.data);

  };
  var lastAdded = Objets.slice().splice(Objets.length-8).reverse();

     return ( 

        <div className="container">
        <h2 style={{color:'#262D44'}}>Dernières offres</h2>

        <div className="LatestOffers">
        
        {lastAdded.map((item) => {

        // const filteredstuffs=categorie.filter((element,index)=>{
        //   return element.id_Categorie === item.id_categorie });


                return(
                  <div key={item.id_objet} className='object'>
          <ThemeProvider theme={theme} >

        <Card sx={{ width: '95%', marginBottom: 1}}  key='' >
        <Link to="/Details">
        <div className="img"
        style={{backgroundImage:`URL(https://photouploadobisto.onrender.com/uploads/${ item.image1})`}}
        onClick={()=>Borrow(item.id_objet)}
        ></div></Link>
        <CardContent>

        
          <strong style={{color:'#262D44'}}>{item.objet}</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
          {item.Categorie}
          </Typography>

          <br />
          <Typography  variant="h7" className='text' color='#262D44'>
          {item.prix_jour} fcfa /Jour
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
        <Link to="/Validation">
          <Button size="small" variant="contained" color='secondary' onClick={()=>Borrow(item.id_objet)} > <strong className='text' style={{color:'#262D44'}}>Emprunter</strong></Button>
        </Link>
        <Link to="/Details">
          <Button size="small" onClick={()=>Borrow(item.id_objet)} ><span className='text' style={{color:'#262D44'}}>VOIR</span></Button>

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