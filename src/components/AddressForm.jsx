import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <strong>Détails de livraison</strong>
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Addresse Email"
            name="email"
            autoComplete="email"
            variant="standard"

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="phone"
            label="Téléphone"
            name="phone"
            autoComplete="phone"
            variant="standard"

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="city"
            name="city"
            label="Quartier"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
          />
        </Grid>
               
        
        
        
      </Grid>
      <Grid item xs={12} sm={6}>
          <br />
        <Typography variant="h6" gutterBottom>
          <strong>Période d'emprunt</strong>
        </Typography> 
          <label for='startDate' className='labeldate'>De:  <input type="date" name="startDate" id="startDate" /></label>
          <Divider/>

        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <label for='endDate' className='labeldate'>A:  <input type="date" name="endDate" id="endDate" /></label>
          <Divider/>

        </Grid>
    </React.Fragment>
  );
}