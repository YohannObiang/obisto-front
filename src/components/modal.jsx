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
  const BASE_URL = 'https://photouploadobisto.onrender.com';
// image1
  const [selectedFile, setselectedFile] = React.useState()
  const [imageUrl, setimageUrl] = React.useState('')

  const onChangeFile = (event) => {
    setselectedFile(event.target.files[0])
    console.log(event.target.files[0])
    setimageUrl(event.target.files[0].name) 
    console.log(event.target.files[0].name) 

  }
  const handleUpload = () => {
    
    const formData = new FormData();
    formData.append('dataFile', selectedFile, selectedFile.name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
        console.log(response.data.file)
    })
  }

// image2
const [selectedFile2, setselectedFile2] = React.useState('')
  const [imageUrl2, setimageUrl2] = React.useState('')

  const onChangeFile2 = (event) => {
    setselectedFile2(event.target.files[0])
    setimageUrl2(event.target.files[0].name) 

    console.log(imageUrl)
  }
  const handleUpload2 = () => {
    
    const formData = new FormData();
    formData.append('dataFile', selectedFile2, selectedFile2.name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
      console.log(response.data.file)
    })
  }

  // image3
const [selectedFile3, setselectedFile3] = React.useState('')
const [imageUrl3, setimageUrl3] = React.useState('')

const onChangeFile3 = (event) => {
  setselectedFile3(event.target.files[0])
  setimageUrl3(event.target.files[0].name) 

}
const handleUpload3 = () => {
  
  const formData = new FormData();
  formData.append('dataFile', selectedFile3, selectedFile3.name);
  axios.post(BASE_URL + '/uploadfile', formData).then(response => {
      
    console.log(response.data.file)
  })
}

// image4
const [selectedFile4, setselectedFile4] = React.useState('')
  const [imageUrl4, setimageUrl4] = React.useState('')

  const onChangeFile4 = (event) => {
    setselectedFile4(event.target.files[0])
    setimageUrl4(event.target.files[0].name) 

  }
  const handleUpload4 = () => {
    
    const formData = new FormData();
    formData.append('dataFile', selectedFile4, selectedFile4.name);
    axios.post(BASE_URL + '/uploadfile', formData).then(response => {
        
      console.log(response.data.file)
    })
  }

  // image5
const [selectedFile5, setselectedFile5] = React.useState('')
const [imageUrl5, setimageUrl5] = React.useState('')

const onChangeFile5 = (event) => {
  setselectedFile5(event.target.files[0])
  setimageUrl5(event.target.files[0].name) 

}
const handleUpload5 = () => {
  
  const formData = new FormData();
  formData.append('dataFile', selectedFile5, selectedFile5.name);
  axios.post(BASE_URL + '/uploadfile', formData).then(response => {
      
    console.log(response.data.file)
  })
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

  const obj = {objet:NomObjet,caution:CautionObjet,etat:EtatObjet,prix_jour:PrixJourObjet,description:PrixSemaineObjet,categorie:CategorieObjet,id_proprietaire:id,statut:"Disponible",date_dajout:Datedajout.toLocaleDateString(),image1:imageUrl.replaceAll(' ', ''),image2:imageUrl2.replaceAll(' ', ''),image3:imageUrl3,image4.replaceAll(' ', ''):imageUrl4.replaceAll(' ', ''),image5:imageUrl5.replaceAll(' ', '')}


  function handlepost(){
    handleUpload();
    handleUpload2();
    handleUpload3();
    handleUpload4();
    handleUpload5();

    console.log(obj)
    axios.post('https://obistobackend.onrender.com/ajout/objet', obj).then(res => {
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
          <Button onClick={handlepost}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
