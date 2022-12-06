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
import {Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import CameraAltIcon from '@mui/icons-material/CameraAlt';



export default function ShowImage({capture, imgSrc, activeStep, setActiveStep, linkreset}) {
 
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    capture()
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

  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setOpen(false);
  };
  
  var lien = `/${linkreset}`


  return (
    <div>
      {/* <Button >scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Fab style={{position: 'fixed', bottom:'45px', right:'50%', transform: 'translateX(50%)'}} color="secondary" aria-label="add" onClick={handleClickOpen('body')}>
        <CameraAltIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
       <img width="100%" src={imgSrc} alt="" />
        <DialogActions>
          <Button onClick={handleClose}>Recommencer</Button>
          <Button onClick={handleNext} >Envoyer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}