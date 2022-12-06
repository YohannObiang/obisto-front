import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';






const theme = createTheme({
  palette: {
    primary: {

      main: '#262D44',

    },
    secondary: {

      main: '#8AE0AA',
      
    },
  },
});
export default function SignUp() {
  const [value, setValue] = React.useState(null);
  const [name, setname]=React.useState('')
  const [msg, setmsg]=React.useState('Erreur!! Veuillez vérifier vos informations ou alors réessayez plus tard')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nom: data.get('lastName'),
      prenom: data.get('firstName'),
      phone: data.get('phone'),
      email: data.get('email'),
      password: data.get('password'),
    });
    const post = {"nom":data.get('lastName'),"prenom":data.get('firstName'),"date_de_naissance":value,"sexe":{sexe},"telephone":data.get('phone'),"email_proprio":data.get('email'),"password":data.get('password')}
    
    
    // function successful(){
    //   setmsg('Felicitations vous')
    // }
    setname(data.get('firstName'))
    if(data.get('email').includes('@') && data.get('email').includes('.')){
      if (data.get('password').length > 8) {
        if (data.get('password') === data.get('passwordrepeated')) {
          axios.post('https://photouploadobisto.onrender.com/ajout/proprietaire', post).then(res => {

          console.log(res);
          if(String(res.data)==="POSTED"){
            setmsg(`Bienvenue dans la communauté Obisto! 
    document.getElementById('accountinfos').style.display='none';
    Veuillez vous rendre à l'onglet "Verifier votre compte" à partir des "Paramètres", dans le menu principal de votre tableau de bord afin de profite pleinement des services de la plaforme `)
            document.getElementById('backtoregistering').style.display='none'
            document.getElementById('gotologin').style.display='inline'
          }
          
        })
        }
        else{
          alert('Les mots de passes saisis ne correspondent pas')
        }
        
      }
      else{
        alert('Votre mot de passe doit contenir au moins 8 caracteres') 
      }
   
    }
    else{
      alert('Votre adresse email doit etre au format suivant: "obisto@abc.xyz"')
    }
   
  };

  const [open, setOpen] = React.useState(false);
  const [sexe, setsexe] = React.useState('');
  const [Date, setDate] = React.useState(value);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handlechangesexe(e){
    setsexe(e.target.value)
  }
  function handleDate(e){
    setDate(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="family-name"
                  autoFocus

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl  sx={{ width:'100%'}}>
              <InputLabel id="demo-simple-select-standard-label">Sexe</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                label="sexe"
                id="sexe"
                onChange={handlechangesexe}
                value={sexe}

              >
               
                <MenuItem value="Homme">Homme</MenuItem>
                <MenuItem value="Femme">Femme</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <br /><br />
            <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
              
                label="Date de naissance"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                sx={{width:"100%"}}
                renderInput={(params) => <TextField sx={{width:"100%"}} {...params} />}
              />
            </LocalizationProvider>
              {/* <label for='endDate' className='labeldate'><input type="date" name="endDate" defaultValue={Date} onChange={handleDate} id="endDate" /></label> */}            </Grid>
              <Grid item xs={12}>
                <TextField
                  

                  required
                  fullWidth
                  id="email"
                  label="Addresse Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  

                  required
                  fullWidth
                  id="phone"
                  label="Téléphone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  

                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  

                  required
                  fullWidth
                  name="passwordrepeated"
                  label="Répéter le mot de passe"
                  type="passwordrepeated"
                  id="passwordrepeated"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle sx={{width:'300px'}} id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id='backtoregistering'>Retour</Button>
          <Link href="/Ajouter-un-article">

          <Button  autoFocus id='gotologin'>
            Se connecter
          </Button>
          </Link>

        </DialogActions>
      </Dialog>
    </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={handleClickOpen}
            >

              <strong>
              S'inscrire</strong>
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Déjà inscrit? Connectez-vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}