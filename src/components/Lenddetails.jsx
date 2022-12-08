import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Commandeview from './commandview';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import logo from '../assets/logo.png'
import ListItem from '@mui/material/ListItem';
import {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';



export default function Lenddetails({Borrow, commande, setOrders, linkreset, lendproprio}) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: ()=> componentRef.current,
    documentTitle: `Facture Obisto ${commande.code
    }`,
    // onAfterPrint: ()=>alert('Print success')
  });
  

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    Borrow()

    setOpen(true);
    setScroll(scrollType);
  
  
  
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log(commande.periode)
var prixjour = parseInt(commande.prix_total)/parseInt(commande.periode)
  


  return (
    <div>
      {/* <Button >linkreset=paper</Button>*/}
       <Button size='small' onClick={handleClickOpen('body')}><strong>Details</strong></Button> 
      {/* <FloatingBtn className='floatingbtn' openpaper={handleClickOpen('paper')}/> */}
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
                  <div ref={componentRef} style={{ padding: '5%',width: '100%', height: window.innerHeight, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <img src={logo} alt="" />
      <Typography variant="h6" gutterBottom>
        <br />
        <strong >Commande</strong>
      </Typography>
      <List disablePadding  style={{width:'100%'}}>

          <div >
          <ListItem key={commande.objet} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={commande.objet} />
            <Typography variant="body2"><strong>{prixjour}fcfa /Jour</strong></Typography>
          </ListItem>
          <br />
          <ListItem sx={{ py: 0, px: 0 }}>
            Du:
          <ListItemText primary={commande.date_debut} />
          au:
          <ListItemText primary={commande.date_fin} /><br />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <>(jj/mm/aaaa)</>
        </ListItem>
        <Typography variant="body2"><strong> {commande.periode} jour(s) </strong></Typography>


        </div>
        <br />
        <br />

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Montant total payé:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {commande.prix_total}fcfa
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={commande.date_de_commande} />
          
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign:'center' }}>
          <strong style={{textAlign:'center'}}>Destinataire</strong>
          </Typography>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Nom: <strong>{commande.nom_destinataire}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Prenom: <strong>{commande.prenom_destinataire}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Email: <strong>{commande.email}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Telephone: <strong>{commande.phone}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Quartier: <strong>{commande.quartier}</strong></div>
        </Grid>

      </Grid>
      <h3>CODE COMMANDE: {commande.code} </h3> 
    </div>          </DialogContentText>
    <Button  sx={{ mt: 1, width:'100%', textAlign:'auto' }} variant='contained' onClick={handlePrint}>
                    Télécharger la facture
                  </Button>
        </DialogContent>
        <DialogActions>

          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}