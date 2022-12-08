
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import {useRef, useContext } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GamesIcon from '@mui/icons-material/Games';
import DiscountIcon from '@mui/icons-material/Discount';
import logo from '../../assets/logo (2).png';
import '../../App.css';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';
import {Link } from "react-router-dom";
import HandshakeIcon from '@mui/icons-material/Handshake';
import Orders from '../../components/Orders';
import Objets from '../../components/Objets';
import Lendings from '../../components/Lendings';
import Tooltip from '@mui/material/Tooltip';
import Webcam from "react-webcam";
import Takeaphotobtn from "../../components/takeaphotobtn"
import ShowImage from "../../components/ShowImage";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';



const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const steps = ['Vérification de la pièce d\'identité', 'Identification du propriétaire'];

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100%`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




export default function Dashboard({setSuccess, displayorders, setdisplayorders, displayobject, setdisplayobject,IdUser, setIdUser, setlogin, setloggedin, setlinkreset, linkreset}) {

    const [Proprio, setProprio] = useState([]);



const [items, setitems] = React.useState([]);
const [commandes, setcommandes] = React.useState([]);


 
useEffect(() => {
  getitems();
},[]);

 
console.log(localStorage.getItem('proprio'))


    const getitems = async () => {
      var response = await axios.get(`https://photouploadobisto.onrender.com/objets`);
      var allcommandes = await axios.get(`https://photouploadobisto.onrender.com/commandes`);
        setitems(response.data);
        setcommandes(allcommandes.data)
 };
 

const getProprio = async () => {
  var response = await axios.get("https://photouploadobisto.onrender.com/proprietaires");
  console.log(response.data[IdUser]);
  setProprio(response.data[localStorage.getItem('proprio')]);


};

useEffect(() => {
  getProprio();

},[]);


console.log(Proprio)

// const [commandespropio, setcommandespropio] = React.useState([]);

// useEffect(() => {
//   listorders();
// },[]);

// function listorders(){
  var commandespropio = commandes.filter((element,index)=>{
    return element.id_proprietaire === Proprio.id_proprietaire})
    var lendproprio = commandes.filter((element,index)=>{
      return element.id_client === Proprio.id_proprietaire})
    console.log(commandespropio)
    // setcommandespropio(commandespro)
// }

  console.log(commandespropio)

 var data = items.filter((element,index)=>{
  return element.id_proprietaire === Proprio.id_proprietaire})
  var data = items.filter((element,index)=>{
    return element.id_proprietaire === Proprio.id_proprietaire})
 console.log(items)
 var id = Proprio.id_proprietaire;

 console.log(id)



    const theme = createTheme({
        palette: {
          primary: {
      
            main: '#262D44',
      
          },
          secondary: {
      
            main: '#8AE0AA',
            
          },
        },
      });  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Get all my stuffs
  const logout = () => {

    document.getElementById('appbar').style.display="inline";
    setSuccess(false)
    setloggedin('/loggedoff')
    setlogin('/Ajouter-un-article')

  }
  
  function Commandes(){
    document.getElementById('Objets').style.display='none';
    document.getElementById('lend').style.display='none';
    document.getElementById('Settings').style.display='none';
    document.getElementById('Commandes').style.display='inline';
    setOpen(false);


  }
  function Objet(){
    document.getElementById('Commandes').style.display='none';
    document.getElementById('lend').style.display='none';
    document.getElementById('Objets').style.display='inline';
    document.getElementById('Settings').style.display='none';

    setOpen(false);


  }
  function Settings(){
    document.getElementById('Commandes').style.display='none';
    document.getElementById('Objets').style.display='none';
    document.getElementById('lend').style.display='none';
    document.getElementById('Settings').style.display='inline';

    setOpen(false);


  }
  function lendfunction(){
    document.getElementById('Commandes').style.display='none';
    document.getElementById('Objets').style.display='none';
    document.getElementById('lend').style.display='inline';
    document.getElementById('Settings').style.display='none';

    setOpen(false);


  }
  function backtooptions(){
    document.getElementById('settingsoptions').style.display='inline';
    document.getElementById('accountinfos').style.display='none';


  }
  function accountinfo(){
    document.getElementById('identityVerification').style.display='inline';
    document.getElementById('settingsoptions').style.display='none';
    document.getElementById('editInfos').style.display='none';
    document.getElementById('accountinfos').style.display='inline';
    document.getElementById('editpassword').style.display='none';

    
  }
  function editaccount(){
    document.getElementById('identityVerification').style.display='none';
    document.getElementById('settingsoptions').style.display='none';
    document.getElementById('editInfos').style.display='inline';
    document.getElementById('accountinfos').style.display='inline';
    document.getElementById('editpassword').style.display='none';
  }
  
  function editpwd(){
    document.getElementById('identityVerification').style.display='none';
    document.getElementById('settingsoptions').style.display='none';
    document.getElementById('editInfos').style.display='none';
    document.getElementById('editpassword').style.display='inline';
    document.getElementById('accountinfos').style.display='inline';


  }

  const [imgSrc, setimgSrc] = React.useState('');
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setimgSrc(imageSrc);
      },
      [webcamRef]
    );
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
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
      // setname(data.get('firstName'))
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
    const [value, setValue] = React.useState(null);
    const [msg, setmsg]=React.useState('Erreur!! Veuillez vérifier vos informations ou alors réessayez plus tard')
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
    
    




  setlinkreset('Ajouter-un-article/maj')

  return (
    <Box sx={{ display: 'flex' }}>
        <ThemeProvider theme={theme}>

        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{width:'100%'}}>
            <Toolbar className='Topbar'>
            <div className='Topbar'>
            <Tooltip title="Menu">
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }),mt:'5px', mb:'5px' }}
            >
              <MenuIcon sx={{color:'#262D44'}}/>
            </IconButton>
            </Tooltip>


                <Link to="/">

<img  src={logo} alt="" onClick={()=>{document.getElementById('appbar').style.display="inline";}} />
</Link>            </div>
            <Link to="/" >
                <Button size='small' color='primary' onClick={logout}> 
                <strong>
                Se déconnecter
                </strong>
                </Button>
            </Link>
            </Toolbar>
            
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'#262D44'}}/> : <ChevronRightIcon  sx={{color:'#262D44'}}/>}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
        
           
                <ListItem disablePadding onClick={Commandes}>
                <ListItemButton>
                    <ListItemIcon>
                    <AlignVerticalBottomIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
            
                    Commandes reçues
                    
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={lendfunction}>
                <ListItemButton>
                    <ListItemIcon>
                    <HandshakeIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
            
                    Emprunts 
                    
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={Objet}>
                <ListItemButton>
                    <ListItemIcon>
                    <WidgetsIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
                
                    Vos objets
                    
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={Settings}>
                <ListItemButton>
                    <ListItemIcon>
                    <SettingsIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
                
                    Paramètres
                    
                </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        <Main open={open} >
            <DrawerHeader />
        <div id="Commandes" style={{display: displayorders}}>
            <h2>Commandes reçus</h2>
            <Orders displayorders={displayorders} linkreset={linkreset}  commandespropio={commandespropio}/>
        </div>
        <div id="lend">
          <h2>Emprunts</h2>
          <Lendings
          displayorders={displayorders} linkreset={linkreset}  lendproprio={lendproprio}
          />
        </div>
        <div id="Objets" style={{display: displayobject}}>
            <h2>Vos objets</h2>
            <Objets 
            setdisplayobject={setdisplayobject}
            setdisplayorders={setdisplayorders}
            id={id}
            getitems={getitems}
            data={data}
            linkreset={linkreset}
            />

        </div>
        <div id="Settings">
            <h2 id="settingstitle">Paramètres</h2>
            <div id="settingsoptions">
              <ListItem disablePadding>
                <ListItemButton onClick={accountinfo}>
                    Verifier son compte
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={editaccount}>
                    Information du compte
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={editpwd}>
                    Modifier le mot de passe
                </ListItemButton>
              </ListItem>
            </div>
            <div id="accountinfos">
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>

              <Button onClick={backtooptions}>Retour</Button>
              </Box>
              <div id='identityVerification'>
              {activeStep === steps.length ? (
                  <> 
                  <h4 style={{textAlign:'center', margin:'75px auto', width:'80%'}}>Votre vérification de compte a été soumise avec succès !</h4>
                  </>
                ) : (
                  
                  <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', paddingBottom:'5vw'}}>
                  <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, width:'fit-content', margin: 'auto' }} >
                  {steps.map((label) => (
                    <Step key={label} >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                  </Stepper>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="photoToVerify"
                    sx={{margin: 'auto'}}
                  />
                  <ShowImage activeStep={activeStep} setActiveStep={setActiveStep} imgSrc={imgSrc} capture={capture}/>
                </div>
                )}
              </div>
              <div id='editInfos'>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
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
      {/* <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle sx={{width:'300px'}} id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        {/* </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> */}
            {/* {msg} */}
          {/* </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id='backtoregistering'>Retour</Button>
          <Link href="/Ajouter-un-article">

          <Button  autoFocus id='gotologin'>
            Se connecter
          </Button>
          </Link>

        </DialogActions> */} 
      {/* </Dialog> */}
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
              Mettre à jour</strong>
            </Button>

            
          </Box>
              </div>
              <div id="editpassword" style={{ margin: 'auto', width:'80%' }}>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
              <h4>Modifier votre mot de passe</h4>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <TextField
                  

                  required
                  fullWidth
                  name="password"
                  label="Mot de passe actuel"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <TextField
                  

                  required
                  fullWidth
                  name="passwordrepeated"
                  label="Nouveau mot de passe"
                  type="passwordrepeated"
                  id="passwordrepeated"
                />
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={handleClickOpen}
            >

              <strong>
              Mettre à jour</strong>
            </Button>
              </Box>
              </div>            </div>
              
              
              

        </div>
        </Main>

        
        </ThemeProvider>
    </Box>
  );
};
 
