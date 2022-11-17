import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FloatingBtn from './floatingbutton';
import NewObjectForm from './NewObjectForm';
import axios from 'axios';

export default function ScrollDialog({id, getitems}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
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

  

  const [NomObjet, setNomObjet] = React.useState('');
  const [CategorieObjet, setCategorieObjet] = React.useState('');
  const [EtatObjet, setEtatObjet] = React.useState('');
  const [CautionObjet, setCautionObjet] = React.useState('');
  const [PrixJourObjet, setPrixJourObjet] = React.useState('');
  const [PrixSemaineObjet, setPrixSemaineObjet] = React.useState('');
  const Datedajout = new Date()

  const obj = {objet:NomObjet,caution:CautionObjet,etat:EtatObjet,prix_jour:PrixJourObjet,prix_semaine:PrixSemaineObjet,categorie:CategorieObjet,id_proprietaire:id,statut:"Disponible",date_dajout:Datedajout.toLocaleDateString(),image1:"image.png",image2:"image.png",image3:"image.png",image4:"image.png",image5:"image.png"}


  function handlepost(){
    console.log(obj)
    axios.post('http://192.168.43.241:3001/ajout/objet', obj).then(res => {
      console.log(res);
      console.log(res.data);
    })
    setOpen(false);
    getitems()
  }


  return (
    <div>
      {/* <Button >scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <FloatingBtn className='floatingbtn' openpaper={handleClickOpen('paper')}/>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <NewObjectForm
            setNomObjet={setNomObjet} 
            setCategorieObjet={setCategorieObjet}
            setEtatObjet={setEtatObjet}
            setCautionObjet={setCautionObjet}
            setPrixJourObjet={setPrixJourObjet}
            setPrixSemaineObjet={setPrixSemaineObjet}

            NomObjet={NomObjet} 
            CategorieObjet={CategorieObjet}
            EtatObjet={EtatObjet}
            CautionObjet={CautionObjet}
            PrixJourObjet={PrixJourObjet}
            PrixSemaineObjet={PrixSemaineObjet}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handlepost}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}