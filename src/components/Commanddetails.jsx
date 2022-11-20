import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Commandeview from './commandview';
import axios from 'axios';



export default function Commanddetails({Borrow, commande, setOrders, linkreset}) {


  

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
           <Commandeview handleClose={handleClose}  linkreset={linkreset} setOrders={setOrders} commande={commande}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}