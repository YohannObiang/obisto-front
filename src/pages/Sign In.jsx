import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './dashboard/dashboard';
import AuthContext from "../context/AuthProvider";
// import axios from '../api/axios';
import axios from 'axios';
import { useEffect, useRef, useState, useContext } from 'react';


const LOGIN_URL = '/proptietaire';




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
export default function SignIn({setlogin, setloggedin}) {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(()=>{
  //     userRef.current.focus();
  // },[])
  useEffect(()=>{
      setErrMsg('');
  },[user, pwd])


  const handleSubmit = async (e) => {
    document.getElementById('appbar').style.display="none"
      e.preventDefault();

      // try{
      //   const response = await axios.post(LOGIN_URL, 
      //       JSON.stringify({nom: user, password: pwd}),
      //       {
      //         headers: { 'Content-Type': 'application/json'},
      //         withCredentials: true
      //       }
      //     );
      //     console.log(JSON.stringify(response?.data));
      //     const accesToken = response?.data?.accessToken;
      //     const roles = response?.data?.roles;
      //     setAuth({ user, pwd, roles,accesToken });
      //     setUser('')
      //     setPwd('')
      //     setSuccess(true);
      // } catch (err) {
      //   if(!err?.response){
      //   setErrMsg('No Server Response');
      //   } else if (err.response?.status === 400){
      //     setErrMsg('Missing UserName or Password');
      //   }
      //   else if (err.response?.status === 401){
      //     setErrMsg('Unauthorized');
      //   }
      //   else{
      //     setErrMsg('Login failed')
      //   }
      //   errRef.current.focus()
      // }
      
    
      
  }

  const [Objets, setObjets] = useState([]);
  const [IdUser, setIdUser] = useState(String(localStorage.getItem('proprio')));

  useEffect(() => {
    getObjets();
  }, []);


  const getObjets = async () => {
    var response = await axios.get("https://obistobackend.onrender.com/proprietaires");
    setObjets(response.data);

  };


  const Connexion = (e) => {
 
  for (let index = 0; index <= Objets.length+1; index++) {
    const element1 = Objets[index];
    const element2 = Objets[index];
    console.log(Objets)
    const fromdb = element1.email_proprio+element2.password
    const frominput = user+pwd
    if(frominput === fromdb && index < Objets.length){
      setSuccess(true);
      alert("Bienvenue "+Objets[index].nom+ " " +Objets[index].prenom)
      localStorage.clear()
      localStorage.setItem('loggedin', '/Ajouter-un-article')
      localStorage.setItem('login', '/loggedoff')
      setloggedin('/Ajouter-un-article')
      setlogin('/loggedoff')
      localStorage.setItem('proprio', index)
      break


    }

    else{
      document.getElementById('errMessage').innerHTML='<p>Identifiants erronés</p>'
    }
    
    
  }
}
console.log(IdUser)
console.log(localStorage.getItem('proprio'))



  return (

    <>
    {success ? (
        <section>
            <Dashboard setIdUser={setIdUser} IdUser={IdUser}/>
        </section>
    ) : (

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
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="standard"

              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> setUser(e.target.value)}
              value={user}

            />
            <TextField
              margin="normal"
              variant="standard"

              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(e)=> setPwd(e.target.value)}
              value={pwd}
            />
            <div id="errMessage"></div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={Connexion}
            >
              <strong>
              Se connecter</strong>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Ajouter-un-article/Inscription" variant="body2">
                  {"Pas de compte? Inscrivez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )}
        </>
  );
}