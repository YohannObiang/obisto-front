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




export default function ScrollDialog({id, getitems}) {
  const BASE_URL = 'https://photouploadobisto.onrender.com';
// image1
  const [selectedFile, setselectedFile] = React.useState()
  const [imageUrl, setimageUrl] = React.useState('image.png')

  const onChangeFile = (event) => {
    setselectedFile(event.target.files[0])
    const formData = new FormData();
    formData.append('dataFile', event.target.files[0], event.target.files[0].name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
      setimageUrl(response.data.file.filename)
      console.log(response.data.file.filename)
    })

  }


// image2
const [selectedFile2, setselectedFile2] = React.useState('')
  const [imageUrl2, setimageUrl2] = React.useState('image.png')

  const onChangeFile2 = (event) => {
    setselectedFile2(event.target.files[0])
    const formData = new FormData();
    formData.append('dataFile', event.target.files[0], event.target.files[0].name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
      setimageUrl2(response.data.file.filename)
      console.log(response.data.file.filename)
    })
  }


  // image3
const [selectedFile3, setselectedFile3] = React.useState('')
const [imageUrl3, setimageUrl3] = React.useState('image.png')

const onChangeFile3 = (event) => {
  setselectedFile3(event.target.files[0])
  const formData = new FormData();
  formData.append('dataFile', event.target.files[0], event.target.files[0].name);
  axios.post(BASE_URL + '/uploadfile', formData).then(response => {
      
    setimageUrl3(response.data.file.filename)
    console.log(response.data.file.filename)
  })
}


// image4
const [selectedFile4, setselectedFile4] = React.useState('')
  const [imageUrl4, setimageUrl4] = React.useState('image.png')

  const onChangeFile4 = (event) => {
    setselectedFile4(event.target.files[0])

    const formData = new FormData();
    formData.append('dataFile', event.target.files[0], event.target.files[0].name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
      setimageUrl4(response.data.file.filename)
      console.log(response.data.file.filename)
    })
    
  }


  // image5
const [selectedFile5, setselectedFile5] = React.useState('')
const [imageUrl5, setimageUrl5] = React.useState('image.png')

const onChangeFile5 = (event) => {
  setselectedFile5(event.target.files[0])
  console.log(event.target.files[0])

  const formData = new FormData();
  formData.append('dataFile', event.target.files[0], event.target.files[0].name);
  axios.post(BASE_URL + '/uploadfile', formData).then(response => {
      
    setimageUrl5(response.data.file.filename)
    console.log(response.data.file.filename)
  })
}
const handleUpload5 = () => {
  console.log(imageUrl5)
 
}
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

  var img  = imageUrl
  var img2 = imageUrl2
  var img3 = imageUrl3
  var img4 = imageUrl4
  var img5 = imageUrl5

  const obj = {objet:NomObjet,caution:CautionObjet,etat:EtatObjet,prix_jour:PrixJourObjet,description:PrixSemaineObjet,categorie:CategorieObjet,id_proprietaire:id,statut:"Disponible",date_dajout:Datedajout.toLocaleDateString(),image1:img, image2:img2, image3:img3, image4:img4, image5:img5 }
  const [verify, setVerify] = React.useState(false);
  const [scrollin, setScrollin] = React.useState('paper');
  const Close = () => {
    setVerify(false);
  };
  const handleOpen = (scrollType) => () => {
   
    console.log(imageUrl)
    console.log(imageUrl2)
    console.log(imageUrl3)
    console.log(imageUrl4)
    console.log(imageUrl5)
    setVerify(true);
    setScrollin(scrollType);
    console.log(obj)

  };
 

  function posted(){
     axios.post('http://localhost:3001/ajout/objet', obj).then(res => {
      console.log(res);
      console.log(res.data);
      alert('Un nouvel objet ajouté')
    })
    setVerify(false);

    setOpen(false);
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
        <DialogTitle id="scroll-dialog-title">Ajouter un objet</DialogTitle>
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
            onChangeFile={onChangeFile}
            onChangeFile2={onChangeFile2}
            onChangeFile3={onChangeFile3}
            onChangeFile4={onChangeFile4}
            onChangeFile5={onChangeFile5}
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
          <Button onClick={handleOpen('body')}>Ajouter</Button>
          
      <Dialog
        open={verify}
        onClose={Close}
        scrollin={scrollin}
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
            Etes-vous sur des informations fournies?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Close}>Non</Button>
          <Link to="/Ajouter-un-article/maj">
          <Button onClick={posted} >Oui</Button></Link>
        </DialogActions>
      </Dialog>
        </DialogActions>
      </Dialog>
    </div>
  );
}