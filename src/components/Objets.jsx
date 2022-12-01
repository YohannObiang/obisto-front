import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import ScrollDialog from './modal';
import Dropmenu from './Dropmenu'

export default function Objets({setdisplayorders, setdisplayobject, getitems, data,id, linkreset}) {

  const [objectToDelete, setobjectToDelete] = React.useState([])

  const Borrow=(id_objet)=>{
    const choosenOne=data.filter((element,index)=>{
      return element.id_objet === id_objet});
      console.log(choosenOne[0])
      setobjectToDelete(choosenOne[0])


  };

  var lastAdded = data.slice().reverse();


  return (
    <div className='ObjetsDiv'>
    <TableContainer component={Paper}>
      <Table sx={{ width: '100vw' }} aria-label="simple table">
        <TableHead>
          <TableRow>

          <TableCell align="right">Id</TableCell>
            <TableCell align="center">Objet</TableCell>
            <TableCell align="center">Catégorie</TableCell>
            <TableCell align="center">Statut</TableCell>
            <TableCell align="left" sx={{ width: '30px' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastAdded.map((row) => (
            <TableRow
              key={row.id_objet}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" align="right" scope="row">
                {row.id_objet}
              </TableCell>
              <TableCell align="center">{row.objet}</TableCell>
              <TableCell align="center">{row.Categorie}</TableCell>
              <TableCell align="right">{row.statut}</TableCell>
              <TableCell align="left"><Dropmenu setdisplayorders={setdisplayorders} setdisplayobject={setdisplayobject} objectToDelete={objectToDelete} Borrow={()=>Borrow(row.id_objet)} linkreset={linkreset}/></TableCell>
                
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ScrollDialog
    id={id}
    getitems={getitems}
    linkreset={linkreset}
    setdisplayorders={setdisplayorders} 
    setdisplayobject={setdisplayobject}
    />
    </div>
  );
}
