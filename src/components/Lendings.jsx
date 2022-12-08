import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import Lenddetails from './Lenddetails';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData(1, 3, 5, 1, "18-09-2022"),
  createData(4, 9, 1, 1, "18-09-2022"),
  createData(2, 12, 16, 2, "18-09-2022"),
  createData(8, 3, 3, 1, "18-09-2022"),
  createData(13, 6, 6, 1, "18-09-2022"),
];

export default function Orders({displayorders, lendproprio, setOrders, linkreset}) {

const [commande, setCommande] = React.useState([])

  const Borrow=(id_commande)=>{
    const choosenOne=lendproprio.filter((element,index)=>{
      return element.id_commande === id_commande});
      setCommande(choosenOne[0])


  };
  var lastAdded = lendproprio.slice().reverse();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100vw' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Objet</TableCell>
            <TableCell align="center">Dates de restitution</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastAdded.map((row) => {
          
            

          return(
            <TableRow
              key={row.id_commande}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.id_commande}
              </TableCell>
              <TableCell align="center">{row.objet}</TableCell>
              <TableCell align="center">{row.date_fin}</TableCell>
              <TableCell align="center"><Lenddetails lendproprio={lendproprio} linkreset={linkreset} setOrders={setOrders} Borrow={()=>Borrow(row.id_commande)} commande = {commande} /></TableCell>
              
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
