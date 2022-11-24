import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import {Link } from "react-router-dom";







export default function Commandeview({handleClose, commande, setOrders, setlinkreset, linkreset}) {

  const [status,setStatus] = React.useState(commande.statut)
  React.useEffect(() => {
    getOrders();
  },[]);

  const getOrders = async () => {
    var response = await axios.get(`https://obistobackend.onrender.com/commandes/proprietaire/${commande.id_proprietaire}`);
    setOrders(response.data);

  };
 

    function statutbtn(){
  if(status === 'Acceptée'){
    document.getElementById('refuse').style.display='none'
    document.getElementById('accept').style.display='none'
  }
  else if(status === 'Refusée' || status === 'Livrée'){
    document.getElementById('refuse').style.display='none'
    document.getElementById('accept').style.display='none'
    document.getElementById('confirmation').style.display='none'
  }
  else{
    document.getElementById('confirmation').style.display='none'

  }

 

  
  }

 React.useEffect(() => {
    statutbtn();
  },[]);

  function Accept(){
    document.getElementById('refuse').style.display='none'
    document.getElementById('accept').style.display='none'
    document.getElementById('confirmation').style.display='inline'
      const order ={
        statut: 'Acceptée'
      }
  

      axios.put(`https://obistobackend.onrender.com/update/commande/${commande.id_commande}`, order).then(res => {
        console.log(res);
        console.log(res.data);
        getOrders()
      })

    
  }
  function Confirm(){

    var code = prompt('Veuillez saisir le code de confirmation')
    if(code == commande.code){
    const order ={
      statut: 'Livrée'
    }


    axios.put(`https://obistobackend.onrender.com/update/commande/${commande.id_commande}`, order).then(res => {
      console.log(res);
      console.log(res.data);
      getOrders()
    })
    setStatus('Confirmée')
alert('La livraison de la commande '+ commande.id_commande+ ' a bien été confirmée')
  }
else{
  alert('Code de confirmation erroné')

}}
  function Refuse(){
    handleClose();
    const order ={
      statut: 'Refusée'
    }


    axios.put(`https://obistobackend.onrender.com/update/commande/${commande.id_commande}`, order).then(res => {
      console.log(res);
      console.log(res.data);
      getOrders()
    })
    setStatus('Refusée')

  }
  var lien = `/${linkreset}`

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {/* <strong>Commande</strong> */}
      </Typography>
      <List disablePadding>

          <div>
          <ListItem key={'  '} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={commande.objet} />
          </ListItem>

          <br />
          <ListItem sx={{ py: 0, px: 0 }}>
            Du:
          <ListItemText primary={commande.date_debut} />
          au:
          <ListItemText primary={commande.date_fin} />
          <Typography variant="body2"><strong>{commande.periode} jour(s) </strong></Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <>(jj/mm/aaaa)</>
        </ListItem>

        </div>
        <br />
        <br />

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {commande.prix_total}fcfa
          </Typography>
        </ListItem>
        <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Statut: <strong>{status}</strong></div>

        <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'70vw'}}>Commande effectuée le: {commande.date_de_commande}</div>

      </List>
      <br />
        <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          {/* <strong>Destinataire</strong> */}
          </Typography>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Nom: <strong>{commande.nom_destinataire}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Prenom: <strong>{commande.prenom_destinataire}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Email: <strong>{commande.email}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Telephone: <strong>{commande.phone}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Quartier: <strong>{commande.quartier}</strong></div>
        </Grid>

      </Grid>
      <br /><br />
      <Link to={lien}>
      <Button id='refuse' onClick={Refuse} >Refuser</Button>
      </Link>
          <Link to={lien}>
          <Button id='accept' onClick={Accept} >Accepter</Button>
          </Link>
          <Link to={lien}>

          <Button id='confirmation' onClick={Confirm} >Confirmer la livraison</Button><br /><br />
          </Link>

          <Button id='close' onClick={handleClose} >Fermer</Button>

    </React.Fragment>
  );
}
