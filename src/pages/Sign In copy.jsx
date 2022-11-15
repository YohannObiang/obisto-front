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
import { useEffect, useRef, useState, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';


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
export default function SignIn() {
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
      setSuccess(true);

      try{
        const response = await axios.post(LOGIN_URL, 
            JSON.stringify({nom: user, password: pwd}),
            {
              headers: { 'Content-Type': 'application/json'},
              withCredentials: true
            }
          );
          console.log(JSON.stringify(response?.data));
          const accesToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles,accesToken });
          setUser('')
          setPwd('')
          setSuccess(true);
      } catch (err) {
        if(!err?.response){
        setErrMsg('No Server Response');
        } else if (err.response?.status === 400){
          setErrMsg('Missing UserName or Password');
        }
        else if (err.response?.status === 401){
          setErrMsg('Unauthorized');
        }
        else{
          setErrMsg('Login failed')
        }
        errRef.current.focus()
      }
      
    
      
  }

  return (

    <>
    {success ? (
        <section>
            <Dashboard/>
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
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=> setPwd(e.target.value)}
              value={pwd}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={handleSubmit}
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