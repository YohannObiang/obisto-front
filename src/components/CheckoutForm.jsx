import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import Payment from './Payment';
import axios from 'axios';
import {Link } from "react-router-dom";

// import Review from './Review';



const steps = ['Détails de commande', 'Vérification des détails'];



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
export default function CheckoutForm({Borrowed}) {

  const [StartDate, setStartDate] = React.useState('');
  const [EndDate, setEndDate] = React.useState('');
  const [Nom, setNom] = React.useState('');
  const [Prenom, setPrenom] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [Quartier, setQuartier] = React.useState('');
  const [BorrowPeriod, setBorrowPeriod] = React.useState('');
  function getStepContent(step) {
    
    switch (step) {
      case 0:
        return <AddressForm 
        StartDate={StartDate} setStartDate={setStartDate} 
        EndDate={EndDate} setEndDate={setEndDate}  
        setBorrowPeriod={setBorrowPeriod}
        setNom={setNom} 
        setPrenom={setPrenom}
        setEmail={setEmail}
        setPhone={setPhone}
        setQuartier={setQuartier}
        Nom={Nom}
        Prenom={Prenom}
        Email={Email}
        Phone={Phone}
        Quartier={Quartier}
        />;
      case 1:
        return <Payment 
        StartDate={StartDate} setStartDate={setStartDate} 
        EndDate={EndDate} setEndDate={setEndDate} 
        BorrowPeriod={BorrowPeriod}
        Borrowed={Borrowed}
        Nom={Nom}
        Prenom={Prenom}
        Email={Email}
        Phone={Phone}
        Quartier={Quartier}
        />;
      // case 2:
      //   return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date){
  return[
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
  
  }
  
  var debut = formatDate(new Date(StartDate));
  var fin = formatDate(new Date(EndDate));
  var code = Math.floor(Math.random()*9999)


  const datedecommande = new Date()
  const commande = {
  id_objet: Borrowed.id_objet,
  objet: Borrowed.objet,
  date_debut: debut,
  date_fin: fin,
  periode: BorrowPeriod,
  prix_total: parseInt(Borrowed.prix_jour)*BorrowPeriod,
  nom_destinataire: Nom,
  prenom_destinataire: Prenom,
  email: Email,
  phone: Phone,
  quartier: Quartier,
  id_proprietaire: Borrowed.id_proprietaire,
  date_de_commande:  datedecommande.toLocaleDateString(),
  statut: "En attente",
  code: parseInt(`${code}`)
}

  function post(){
    axios.post('https://obistobackend.onrender.com/ajout/commande', commande).then(res => {
      console.log(res);
      console.log(res.data);
      alert("Votre commande a été éffectuée avec succès ! Votre code commande est : " + code)
    console.log(commande)
  })}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" sx={{ m: 'auto' }}>
            Validation
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Dernière étape
              </Typography>
              <Typography variant="subtitle1">
                Afin de valider votre commande auprès du proprietaire, vous serez redirigé vers <strong>e-Billing</strong> pour effectuer le paiement de celle-ci.
              </Typography>
                <Link to='/'>
                  <Button  sx={{ mt: 3, ml: 0 }} onClick={post}>
                    Continuer
                  </Button>
                </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Retour
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  color='secondary'
                >
                  <strong>{activeStep === steps.length - 1 ? 'Commander' : 'Suivant'}</strong>
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}