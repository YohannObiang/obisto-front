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
    var response = await axios.get("https://mocki.io/v1/1e2ef370-5248-4738-ad84-b5127aaea339");
    setObjets(response.data);

  };


    const filteredstuffs=Objets.filter((element,index)=>{
      return element.Categorie === IdCategorie });
      console.log(filteredstuffs)

      const Borrow=(id_objet)=>{
        const choosenOne=filteredstuffs.filter((element,index)=>{
          return element.id_objet === id_objet});
          setBorrowed(choosenOne[0])
    
    
      };
 
    return ( 

        <div className="container">
        <h2>{IdCategorie}</h2>
        <div className="filter">
            {/* <select name="" id="">
                <option value={0}>--- Catégories ---</option>
            </select> */}
            <select name="" id="">
                <option value={0}>--- Prix --- (fcfa)</option>
                <option>0 - 2500</option>
                <option>2501 - 5000</option>
                <option>5001 - 10000</option>
                <option>10001 - 20000</option>
                <option>10001 - 20000</option>
                <option>Plus de 20000</option>
            </select>
            

        </div>
        <div className="LatestOffers">
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

        
          <strong >{item.objet}</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
          {item.Categorie} 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          {item.prix_jour} fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          {item.prix_semaine} fcfa /Semaine
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