import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';



export default function NewObjectForm({
  setNomObjet, setCategorieObjet, setEtatObjet, setCautionObjet, setPrixJourObjet, setPrixSemaineObjet,
  NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet,onChangeFile,onChangeFile2,
  onChangeFile3, onChangeFile4, onChangeFile5
}) {
function nom(e){
  setNomObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
function categorie(e){
  setCategorieObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
function etat(e){
  setEtatObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
function caution(e){
  setCautionObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
function prixjour(e){
  setPrixJourObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
function prixsemaine(e){
  setPrixSemaineObjet(e.target.value)
  console.log(NomObjet, CategorieObjet, EtatObjet, CautionObjet, PrixJourObjet, PrixSemaineObjet)

}
 

  const [image, setImage] = React.useState('')
  function handleImage(e){

    console.log(e.target.files)
    setImage(e.target.files[0])

  }
  function handleApi(){
    const formData = new FormData()
    formData.append('image', image)
    axios.post('http://localhost:4000/uploadfile', formData).then((res)=>{
      console.log(res)
    })
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <strong>Détails de livraison</strong>
      </Typography>

      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <TextField
            required
            id="objet"
            name="objet"
            label="Nom de l'objet"
            fullWidth
            variant="standard"
            autoFocus
            onChange={nom}
          />
        </Grid>

          <Grid item xs={12}>
            <FormControl variant="standard" sx={{ width:'100%'}}>
              <InputLabel id="demo-simple-select-standard-label">Catégorie</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                label="categorie"
                id="categorie"
                onChange={categorie}
                value={CategorieObjet}

              >

                <MenuItem value="Sono">Sono</MenuItem>
                <MenuItem value="Caméra">Caméra</MenuItem>
                <MenuItem value="Jeu vidéo">Jeu vidéo</MenuItem>
                <MenuItem value="Téléphone">Téléphone</MenuItem>
               
                <MenuItem value="Machine">Machine</MenuItem>
                <MenuItem value="Outil">Outil</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="standard" sx={{ width:'100%'}}>
              <InputLabel id="demo-simple-select-standard-label">Etat</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                label="Etat"
                id="etat"
                onChange={etat}
                value={EtatObjet}

              >
                
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Bon">Bon</MenuItem>
                <MenuItem value="Assez bon">Assez bon</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="caution"
            name="caution"
            label="Caution"
            fullWidth
            variant="standard"
            onChange={caution}

          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="prix_jour"
            label="Prix journalier"
            name="prix_jour"
            variant="standard"
            onChange={prixjour}

          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="prix_semaine"
            label="Description"
            name="prix_semaine"
            variant="standard"
            onChange={prixsemaine}

          />
        </Grid>



          <Grid item xs={12}>
          <input onChange={onChangeFile} type="file" name="" id="" />
          </Grid>

          <Grid item xs={12}>
          <input onChange={onChangeFile2} type="file" name="" id="" />
          </Grid>

          <Grid item xs={12}>
          <input onChange={onChangeFile3} type="file" name="" id="" />
          </Grid>

          <Grid item xs={12}>
          <input onChange={onChangeFile4} type="file" name="" id="" />
          </Grid>

          <Grid item xs={12}>
          <input onChange={onChangeFile5} type="file" name="" id="" />
          </Grid>


        
        
        
      </Grid>

    </React.Fragment>
  );
}