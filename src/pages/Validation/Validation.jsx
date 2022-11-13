import React from "react";
import './Validation.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/Iphone X.jpg';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Caroussel from "../../components/Caroussel";
import Box from '@mui/material/Box';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddressForm from "../../components/AddressForm";
import CheckoutForm from "../../components/CheckoutForm";



const Validation = ({Borrowed}) => {

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
  
    return ( 

        <div >
       


  
{/* <div className='desktop '> */}
          {/* <ThemeProvider theme={theme} >

       
          <Card sx={{ width: '80%', height:'580px', marginBottom: 5}}  key='' className="cardValidation cardDetails" id='prev'>
     

        <CardContent>
        <AddressForm/>

        </CardContent>
                <Divider/>

        <CardActions className='centeredbtn'>

          <Button size="medium" variant="contained" color='secondary'sx={{marginBottom: 1, marginLeft:1}}> <strong className='text'>
            Emprunter</strong>
            </Button>
        </CardActions>
          </Card>
          <Card sx={{ width: '80%', height:'580px', marginBottom: 5}}  key='' className="cardValidation cardDetails" id='next'>
     

        <CardContent>
        <AddressForm/>

        </CardContent>
                <Divider/>

        <CardActions className='centeredbtn'>

          <Button size="medium" variant="contained" color='secondary'sx={{marginBottom: 1, marginLeft:1}}> <strong className='text'>
            Emprunter</strong>
            </Button>
        </CardActions>
          </Card>
          </ThemeProvider> */}
          <CheckoutForm/>
{/* </div> */}
{/* <div className='mobile'>     
       <ThemeProvider theme={theme} >

        
          <Card sx={{ width: '90%', height:'200px', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="1"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>
</div> */}

        
        </div>
     );
}
 
export default Validation;