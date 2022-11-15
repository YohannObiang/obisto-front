import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';



const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({StartDate, EndDate, BorrowPeriod, Borrowed, Nom,Prenom,Email,Phone,Quartier}) {

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
  var total = Borrowed.prix_jour * BorrowPeriod
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <strong>Commande</strong>
      </Typography>
      <List disablePadding>

          <div>
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
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total}fcfa
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          <strong>Destinataire</strong>
          </Typography>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Nom: <strong>{Nom}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Prenom: <strong>{Prenom}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Email: <strong>{Email}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Telephone: <strong>{Phone}</strong></div>
          <div gutterBottom style={{display:'flex', justifyContent: 'space-between', width:'100%'}}>Quartier: <strong>{Quartier}</strong></div>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}