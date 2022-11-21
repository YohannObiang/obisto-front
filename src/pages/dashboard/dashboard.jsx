
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
import Tooltip from '@mui/material/Tooltip';


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




export default function Dashboard({IdUser, setIdUser, setlogin, setloggedin, setlinkreset, linkreset}) {

    const [Proprio, setProprio] = useState([]);



const [items, setitems] = React.useState([]);
const [commandes, setcommandes] = React.useState([]);


 
useEffect(() => {
  getitems();
},[]);

 
console.log(localStorage.getItem('proprio'))


    const getitems = async () => {
      var response = await axios.get(`https://obistobackend.onrender.com//objets`);
      var allcommandes = await axios.get(`https://obistobackend.onrender.com//commandes`);
        setitems(response.data);
        setcommandes(allcommandes.data)
 };
 

const getProprio = async () => {
  var response = await axios.get("https://obistobackend.onrender.com//proprietaires");
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
    console.log(commandespropio)
    // setcommandespropio(commandespro)
// }

  console.log(commandespropio)

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
    setloggedin('/loggedoff')
    setlogin('/Ajouter-un-article')

  }
  
  function Commandes(){
    document.getElementById('Objets').style.display='none';
    document.getElementById('Settings').style.display='none';
    document.getElementById('Commandes').style.display='inline';
    setOpen(false);


  }
  function Objet(){
    document.getElementById('Commandes').style.display='none';
    document.getElementById('Objets').style.display='inline';
    document.getElementById('Settings').style.display='none';

    setOpen(false);


  }
  function Settings(){
    document.getElementById('Commandes').style.display='none';
    document.getElementById('Objets').style.display='none';
    document.getElementById('Settings').style.display='inline';

    setOpen(false);


  }
  function backtooptions(){
    document.getElementById('settingsoptions').style.display='inline';
    document.getElementById('accountinfos').style.display='none';


  }
  function accountinfo(){
    document.getElementById('accountinfos').style.display='inline';
    document.getElementById('settingsoptions').style.display='none';
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
                    <HandshakeIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
            
                    Commandes
                    
                </ListItemButton>
                </ListItem>


                <ListItem disablePadding onClick={Objet}>
                <ListItemButton>
                    <ListItemIcon>
                    <WidgetsIcon sx={{color:'#262D44'}}/>
                    </ListItemIcon>
                
                    Objets
                    
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
        <div id="Commandes">
            <h2>Commandes</h2>
            <Orders linkreset={linkreset}  commandespropio={commandespropio}/>
        </div>
        <div id="Objets">
            <h2>Objets</h2>
            <Objets 
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
                <ListItemButton>
                    Verifier son compte
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={accountinfo}>
                    Information du compte
                </ListItemButton>
              </ListItem>
            </div>
            <div id="accountinfos">
              
              <Button onClick={backtooptions}>Retour</Button>
                <h3>Informations de compte</h3>
            </div>

              
              

        </div>
        </Main>

        
        </ThemeProvider>
    </Box>
  );
};
 
