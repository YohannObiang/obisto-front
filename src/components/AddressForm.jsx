import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';


export default function AddressForm({StartDate, setStartDate, setEndDate, EndDate, 
  setBorrowPeriod, setNom,setPrenom,setEmail,setPhone,setQuartier, Nom,Prenom,Email,Phone,Quartier}) {

var date1 = new Date(String(StartDate));
var date2 = new Date(String(EndDate));
var time_Diff = date2.getTime() - date1.getTime();
var days_Diff = time_Diff / (1000 * 3600 * 24);
setBorrowPeriod(days_Diff)


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date){
return[
  padTo2Digits(date.getMonth() + 1),
  padTo2Digits(date.getDate()),
  date.getFullYear(),
].join('/');

}

console.log(formatDate(new Date(StartDate)));
console.log(formatDate(new Date(2027, 3,6)));

const handleChangeStartDate = (e) =>{
  setStartDate(formatDate(new Date(e.target.value)))
}
const handleChangeEndDate = (e) =>{
  setEndDate(formatDate(new Date(e.target.value)))
}
const handleChangeNom = (e) =>{
  setNom(e.target.value)
}
const handleChangePrenom = (e) =>{
  setPrenom(e.target.value)
}
const handleChangeEmail = (e) =>{
  setEmail(e.target.value)
}
const handleChangePhone = (e) =>{
  setPhone(e.target.value)
}
const handleChangeQuartier = (e) =>{
  setQuartier(e.target.value)
}
console.log(StartDate)

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
            onChange={handleChangeNom}
            defaultValue={Nom}
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
            onChange={handleChangePrenom}
            defaultValue={Prenom}
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
            onChange={handleChangeEmail}
            defaultValue={Email}
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
            onChange={handleChangePhone}
            defaultValue={Phone}
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
            onChange={handleChangeQuartier}
            defaultValue={Quartier}
          />
        </Grid>
               
        
        
        
      </Grid>
      <Grid item xs={12} sm={6}>
          <br />
        <Typography variant="h6" gutterBottom>
          <strong>Période d'emprunt</strong>
        </Typography> 
          <label for='startDate' className='labeldate'>De:  <input type="date" name="startDate" defaultValue={StartDate} id="startDate" onChange={handleChangeStartDate} /></label>
          <Divider/>

        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <label for='endDate' className='labeldate'>A:  <input type="date" name="endDate" defaultValue={EndDate} onChange={handleChangeEndDate} id="endDate" /></label>
          <Divider/>
        </Grid>
    </React.Fragment>
  );
}