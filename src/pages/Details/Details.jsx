import React from "react";
import './Details.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Caroussel from "../../components/Caroussel";
import {Link } from "react-router-dom";
import Back from "../../components/Back";




const Details = ({Borrowed, Back}) => {

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
  
console.log(Borrowed.image1)
console.log(Borrowed.image2)
console.log(Borrowed.image3)

var lien =`/${Back}`
    return ( 

        <div className="contain">
       

  
<div className='desktop'>
          <ThemeProvider theme={theme} >
        <Card sx={{ width: '76%', height:'580px', marginBottom: 5}}   >
        <Back/>
        <CardContent>
        <h2>Détails</h2>        
        <Caroussel 
        nom = {Borrowed.objet}
        image = {Borrowed.image1}
        image2 = {Borrowed.image2}
        image3 = {Borrowed.image3}
        image4 = {Borrowed.image4}
        image5 = {Borrowed.image5}
        />
        </CardContent>
          </Card>
          <Card sx={{ width: '20%', height:'580px', marginBottom: 5}}   className="cardDetails">
     

        <CardContent>
        <h3>{Borrowed.objet}</h3>
        <Divider/>
        <br />
        <span>Forfaits de location:</span><br />
        <span>{Borrowed.prix_jour} fcfa /Jour</span><br />
        <span>{Borrowed.prix_semaine} fcfa /Semaine</span><br /><br />
        <span>Etat: Excellent</span><br /><br />
        <span>Caution: Aucune</span><br /><br />
        <div className="description">
        {Borrowed.description}
        </div>
                <Divider/>

        </CardContent>

        <CardActions className='centered'>
        <Link to="/Validation">
          <Button size="medium" variant="contained" color='secondary' sx={{marginBottom: 1, marginLeft:1}}> <strong className='text'>Emprunter</strong></Button>
        </Link>
        <Link to={lien}>
          <Button size="small"  color='primary' sx={{marginBottom: 1, marginLeft:1}}> Retour</Button>
        </Link>

        </CardActions>
          </Card>
          </ThemeProvider>
</div>
<div className='mobile'>     
       <ThemeProvider theme={theme} >

        <Card sx={{ width: '90%', height:'450px', marginBottom: 2}}   >
          <h2>Détails</h2>
          <Caroussel 
          nom = {Borrowed.objet}
          image = {Borrowed.image1}
          image2 = {Borrowed.image2}
          image3 = {Borrowed.image3}
          image4 = {Borrowed.image4}
          image5 = {Borrowed.image5}
          Borrowed = {Borrowed}
 />

        
          </Card>
          <Card sx={{ width: '90%', height:'350px', marginBottom: 2}}   >
        
        <CardContent>
        <h3>{Borrowed.objet}</h3>
        <Divider/>
          <div className="etatproduit">
            <div>
        <span>Forfaits de location:</span><br />
        <span>{Borrowed.prix_jour} fcfa /Jour</span><br />
            </div>
            
        <div>
                  <span>Etat: {Borrowed.etat}</span><br />
                  <span>Caution: {Borrowed.caution}</span>
        </div>
          </div>
        <br />
        <div className="description">
        <span>
          Description:<br/>
          {Borrowed.description}
        </span>
        </div>
        
        </CardContent>
        <Divider/>
      <div className="centered">
        <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/Validation">
          <Button size="medium" variant="contained" sx={{m:1}} color='secondary'> <strong className='text'>Emprunter</strong></Button>
          </Link>
          
           <Link to={lien}>
          <Button size="small"  color='primary' sx={{marginBottom: 1, marginTop:1}}> Retour</Button>
        </Link>
        </CardActions></div>
          </Card>
          </ThemeProvider>
</div>

        
        </div>
     );
}
 
export default Details;