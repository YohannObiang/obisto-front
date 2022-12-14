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
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import logo from './assets/logo copy.png';
import SignInToRent from './pages/SignInToRent';
import './App.css';
import IronIcon from '@mui/icons-material/Iron';
import CableIcon from '@mui/icons-material/Cable';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import axios from 'axios';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Home from './pages/Home';
import SignIn from './pages/Sign In';
import SignUp from './pages/Sign up';
import Tooltip from '@mui/material/Tooltip';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import CelebrationIcon from '@mui/icons-material/Celebration';
import InboxIcon from '@mui/icons-material/Inbox';
import Details from './pages/Details/Details';
import FilterResult from './pages/FilterResult/FilterResult'
import Categorie from './pages/Categorie/Categorie';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CheckoutForm from './components/CheckoutForm';
import Dashboardmaj from './pages/dashboard/dashboard copy';
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
  localStorage.setItem('login', '/Ajouter-un-article')
  localStorage.setItem('loggedin', '/loggedoff')
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setBack('categorie')
  };
  // Get all my stuffs

  const [Objets, setObjets] = useState([]);

  useEffect(() => {
    getObjets();
  }, []);

  const getObjets = async () => {
    var response = await axios.get("https://photouploadobisto.onrender.com/objets");
    setObjets(response.data);

  };
  const [filteredstuffs, setfilteredstuffs] = useState([]);

  const handleSearchTerm = () => {
    setBack('recherche')
    if(SearchTerm.length > 0){
    var filtered = Objets.filter(item => item.objet.toLowerCase().includes(SearchTerm.toLowerCase()));
    console.log(filtered)
    setfilteredstuffs(filtered)
 

  }
    else{
      setfilteredstuffs(Objets)
    }
  };

  const [success, setSuccess] = useState(false);
  const [Borrowed, setBorrowed] = useState('');
  const [SingleObject, setSingleObject] = useState({});
  const [IdCategorie, setIdCategorie] = useState('');
  const [login, setlogin] = useState(localStorage.getItem('login'));
  const [loggedin, setloggedin] = useState(localStorage.getItem('loggedin'));
  const [SearchTerm, setSearchTerm] = useState("");
  const [Back, setBack] = useState("accueil");
  const [linkreset, setlinkreset] = React.useState('Ajouter-un-article');

  const [commandes, setcommandes] = useState([]);

  useEffect(() => {
    getcommandes();
  }, []);

  const getcommandes = async () => {
    var response = await axios.get("https://photouploadobisto.onrender.com/commandes");
    setcommandes(response.data);

  };

  function Tracking(){
    handleDrawerClose()
    var code = prompt("Veuillez saisir votre code commande")
    for (let index = 0; index < commandes.length+1; index++) {
      if( commandes[index].code == code){
        alert('Le statut de votre commande est: ' + commandes[index].statut)
        break
      }
      else if (index > commandes.length){
      }
  }
}
  
const [displayobject, setdisplayobject] = React.useState('none')
const [displayorders, setdisplayorders] = React.useState('inline')






  return (
    <Box sx={{ display: 'flex' }}>
              <BrowserRouter>

      <CssBaseline />
      <AppBar position="fixed" open={open} id='appbar'>
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

            <Link to="/accueil" onClick={()=>{setBack('accueil')}} style={{display:'flex', alignItem: 'center', justifyContent: 'center'}}>

            <img  src={logo} alt="" style={{height:'40px'}}/>
            </Link>
          </div>
          <Link to="/Ajouter-un-article">
          <Tooltip title="Mettre un objet en location">
          <IconButton
            color="inherit"
            sx={{width:'fit-content'}}
          >
            <LoginIcon sx={{color:'#262D44'}}/>
          </IconButton>
          </Tooltip>

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


            <Link to="/categorie" onClick={()=>{setIdCategorie('F??tes & Evenements'); handleDrawerClose()}}>

            <ListItem disablePadding color='primary'>
              <ListItemButton>
                <ListItemIcon>
                  <CelebrationIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

                <span style={{color:'#262D44'}}>
                  F??tes & Ev??nements
                </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Gaming'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsEsportsIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

<span style={{color:'#262D44'}}>              
                Gaming
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Image & Son'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SlowMotionVideoIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

              <span style={{color:'#262D44'}}>              
                Image & Son
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Cuisine'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SoupKitchenIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

              <span style={{color:'#262D44'}}>              
                Cuisine
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Sport & Vacances'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsTennisIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

<span style={{color:'#262D44'}}>              
                Sport & Vacances
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Electroniques'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CableIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

<span style={{color:'#262D44'}}>              
                Electroniques
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Electrom??nagers'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IronIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

              <span style={{color:'#262D44'}}>              
                Electrom??nagers
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('V??hicules'); handleDrawerClose()}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DriveEtaIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

              <span style={{color:'#262D44'}}>              
                V??hicules
                
              </span>
              </ListItemButton>
            </ListItem>
            </Link>

        
        </List>
        <br/> <br/>

        <Divider/>
        <List>
       

            <ListItem disablePadding>
              <ListItemButton onClick={Tracking}>
                <ListItemIcon>
                  <InboxIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>

              <span style={{color:'#262D44'}}>           
                Suivi de commande
                </span>
              </ListItemButton>
            </ListItem>
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
        <Route path="/accueil" element={<Home 
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
        setBack={setBack}

        />} /> 
        <Route path="/categorie" element={<Categorie 
        IdCategorie = {IdCategorie}
        setBorrowed={setBorrowed}
        />} /> 
        <Route path={login} element={<SignIn success={success} setSuccess={setSuccess} setlogin={setlogin} setloggedin={setloggedin}/>} /> 
        <Route path={loggedin} element={<Dashboard displayorders={displayorders} setdisplayorders={setdisplayorders} displayobject={displayobject} setdisplayobject={setdisplayobject} linkreset={linkreset} setlinkreset={setlinkreset} setlogin={setlogin} setloggedin={setloggedin}/>} /> 
        <Route path="/Ajouter-un-article/maj" element={<Dashboardmaj displayorders={displayorders} setdisplayorders={setdisplayorders} displayobject={displayobject} setdisplayobject={setdisplayobject}  linkreset={linkreset}   setlinkreset={setlinkreset} setlogin={setlogin} setloggedin={setloggedin}/>} /> 
        <Route path="/Ajouter-un-article/Inscription" element={<SignUp/>} /> 
        <Route path="/Details" element={<Details
        Borrowed={Borrowed}
        Back={Back}
        />} /> 
        <Route path="objets" element={<CheckoutForm/>}/>
        <Route path="/Validation" element={<SignInToRent
        success={success} setSuccess={setSuccess}
         Borrowed={Borrowed}
        />} /> 
      </Routes>
        {/* <Footer/> */}
      </Main>
      </BrowserRouter>

    </Box>
  );
}