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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import {Link } from "react-router-dom";






export default function ToDelete({id, getitems, linkreset}) {

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

  function deleteobject (){
    axios.delete(`https://obistobackend.onrender.com/delete/objet/${id}`)

  }


  var lien = `/${linkreset}`
  return (
    <div>
      {/* <Button >scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}

        <MenuItem onClick={handleClickOpen('body')} disableRipple>
          <DeleteIcon />
          Supprimer
        </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Ajouter un objet</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Voulez-vous vraiment supprimer cet objet?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Link to={lien} onClick={deleteobject}>
          <Button >Supprimer</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}