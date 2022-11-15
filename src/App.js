import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Dashboard from './pages/dashboard/dashboard'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GamesIcon from '@mui/icons-material/Games';
import DiscountIcon from '@mui/icons-material/Discount';
import logo from './assets/logo (2).png';
import './App.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import axios from 'axios';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Home from './pages/Home';
import SignIn from './pages/Sign In';
import SignUp from './pages/Sign up';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Details from './pages/Details/Details';
import FilterResult from './pages/FilterResult/FilterResult'
import Categorie from './pages/Categorie/Categorie';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckoutForm from './components/CheckoutForm';
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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Get all my stuffs

  const [Objets, setObjets] = useState([]);

  useEffect(() => {
    getObjets();
  }, []);

  const getObjets = async () => {
    var response = await axios.get("https://mocki.io/v1/10385da0-d991-4c3c-8c5c-4973477cd44e");
    setObjets(response.data);

  };
  const [filteredstuffs, setfilteredstuffs] = useState([]);

  const handleSearchTerm = () => {
    
    if(SearchTerm.length > 0){
    var filtered = Objets.filter(item => item.objet.toLowerCase().includes(SearchTerm.toLowerCase()));
    console.log(filtered)
    setfilteredstuffs(filtered)

  }
    else{
      setfilteredstuffs(Objets)
    }
  };

  const [Borrowed, setBorrowed] = useState('');
  const [SingleObject, setSingleObject] = useState({});
  const [IdCategorie, setIdCategorie] = useState('');
  const [ObjectCategorie, setObjectCategorie] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  
function reset (){
  document.getElementById('allcategorystuffs').style.display='grid';
  document.getElementById('somecategorystuffs').style.display='none';
}
  return (
    <Box sx={{ display: 'flex' }}>
              <BrowserRouter>

      <CssBaseline />
      <AppBar position="fixed" open={open} id='appbar'>
        <Toolbar className='Topbar'>
          <div className='Topbar'>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon sx={{color:'#262D44'}}/>
            </IconButton>

            <Link to="/">

            <img  src={logo} alt="" />
            </Link>
          </div>
          <Link to="/Ajouter-un-article">

          <IconButton
            color="inherit"
            sx={{width:'fit-content'}}
          >
            <DiscountIcon sx={{color:'#262D44'}}/>
          </IconButton>
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
       
            <Link to="/categorie" onClick={()=>{setIdCategorie('Sono'); reset()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VolumeUpIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
           
                Sono
                
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Caméra')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CameraAltIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
              
                Caméras
                
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Jeu vidéo')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GamesIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
              
                Jeux vidéos
                
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Téléphone')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SmartphoneIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
              
                Téléphones
                
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Outil')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConstructionIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
              
                Outils
                
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Machine')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrecisionManufacturingIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
              
                Machines
                
              </ListItemButton>
            </ListItem>
            </Link>

        
        </List>
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
      <Routes>
        <Route path="/" element={<Home 
        Objets = {Objets} 
        setSearchTerm={setSearchTerm}
        handleSearchTerm={handleSearchTerm}
        setBorrowed={setBorrowed}
        />} /> 
        <Route path="/recherche" element={<FilterResult
        SearchTerm={SearchTerm}
        filteredstuffs={filteredstuffs}
        setfilteredstuffs={setfilteredstuffs}
        setBorrowed={setBorrowed}
        setSingleObject={setSingleObject}

        />} /> 
        <Route path="/categorie" element={<Categorie 
        IdCategorie = {IdCategorie}
        setBorrowed={setBorrowed}
        />} /> 
        <Route path="/Ajouter-un-article" element={<SignIn/>} /> 
        <Route path="/Ajouter-un-article/Inscription" element={<SignUp/>} /> 
        <Route path="/Details" element={<Details
        Borrowed={Borrowed}
        />} /> 
        <Route path="/Validation" element={<CheckoutForm
         Borrowed={Borrowed}
        />} /> 
      </Routes>
        <Footer/>
      </Main>
      </BrowserRouter>

    </Box>
  );
}