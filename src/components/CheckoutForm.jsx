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
import {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import logo from '../assets/logo.png'



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
  const [Code, setCode] = React.useState('');
  const componentRef = useRef();

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
        componentRef={componentRef}
        code={code}
        />;
      // case 2:
      //   return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [IDobjet, setIDobjet] = React.useState(0);
  const [IDorders, setIDorders] = React.useState(0);



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
  React.useEffect(() => {
    setCode(Math.floor(Math.random()*9999));
  },[]);
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
  code: parseInt(`${Code}`)
}
  var faitle = `Fait le ${datedecommande.toLocaleDateString()}`
  function post(){
    setActiveStep(activeStep + 1);

    axios.post('https://photouploadobisto.onrender.com/ajout/commande', commande).then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.id_commande)
      setIDorders(res.data.id_commande)
      alert("Votre commande a été éffectuée avec succès ! Votre code commande est : " + Code)
    console.log(commande)
  })
  
}
  // const handlePrint = useReactToPrint({
  //   content: ()=> componentRef.current ,
  //   documentTitle: 'Facture Obisto',
  //   onAfterPrint: ()=> console.log('printed')
    
  // })

  // const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: ()=> componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: ()=>alert('Print success')
  });

  var total = Borrowed.prix_jour * BorrowPeriod
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
                Commande confirmée
              </Typography>
              <Typography variant="subtitle1">
              Votre commande est en attente d'acceptation auprès du propriétaire
              Une copie de votre facture vous a été envoyée par mail.          
              </Typography>

              <div ref={componentRef} style={{ padding: '5%',width: '100%', height: window.innerHeight, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <img src={logo} alt="" />
      <Typography variant="h6" gutterBottom>
        <br />
        <strong >Commande</strong>
      </Typography>
      <List disablePadding  style={{width:'100%'}}>

          <div >
          <ListItem key={Borrowed.objet} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={Borrowed.objet} />
            <Typography variant="body2"><strong>{Borrowed.prix_jour}fcfa /Jour</strong></Typography>
          </ListItem>
          <br />
          <ListItem sx={{ py: 0, px: 0 }}>
            Du:
          <ListItemText primary={debut} />
          au:
          <ListItemText primary={fin} />
          <Typography variant="body2"><strong>{BorrowPeriod} jour(s) </strong></Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <>(jj/mm/aaaa)</>
        </ListItem>

        </div>
        <br />
        <br />

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Montant total payé:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total}fcfa
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={faitle} />
          
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign:'center' }}>
          <strong style={{textAlign:'center'}}>Destinataire</strong>
          </Typography>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Nom: <strong>{Nom}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Prenom: <strong>{Prenom}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Email: <strong>{Email}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Telephone: <strong>{Phone}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Quartier: <strong>{Quartier}</strong></div>
        </Grid>

      </Grid>
      <h3>CODE COMMANDE: {Code} </h3> 
    </div>

                {/* <Link to='/'> */}
                  <Button  sx={{ mt: 0, width:'100%', textAlign:'auto' }} variant='contained' onClick={handlePrint}>
                    Télécharger la facture
                  </Button>
                {/* </Link> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                   <strong> Retour</strong>
                  </Button>
                )}

                
                  {activeStep === steps.length - 1 ? 
                  <Button
                  variant="contained"
                  onClick={post}
                  sx={{ mt: 3, ml: 1 }}
                  color='secondary'
                >
                  <strong>
                  Commander
                  </strong>
                  </Button> : <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                color='secondary'
              >
                <strong>
                Suivant
                </strong>
                </Button>}
                
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <button onClick={handlePrint}>print</button>
    </ThemeProvider>
  );
}