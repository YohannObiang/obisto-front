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

export default function Objets({Proprio}) {

  const [Objets, setObjets] = React.useState([]);

  React.useEffect(() => {
    getObjets();
  });

  var id = String(Proprio.id_proprietaire)
  const getObjets = async () => {
    var response = await axios.get(`http://localhost:3001/proprietaires/objets/${id}`);
    setObjets(response.data);

  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Id</TableCell>
            <TableCell align="center">Objet</TableCell>
            <TableCell align="center">Catégorie</TableCell>
            <TableCell align="center">Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Objets.map((row) => (
            <TableRow
              key={row.id_objet}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.id_objet}
              </TableCell>
              <TableCell align="center">{row.objet}</TableCell>
              <TableCell align="center">{row.Categorie}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
