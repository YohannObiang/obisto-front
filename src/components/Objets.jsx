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

export default function Objets({Proprio}) {

  const [Objets, setObjets] = React.useState([]);

  React.useEffect(() => {
    getObjets();
  });

  var id = String(Proprio.id_proprietaire)
  const getObjets = async () => {
    var response = await axios.get(`https://obistobackend.onrender.com/proprietaires/objets/${id}`);
    setObjets(response.data);

  };
  

  return (
    <div className='ObjetsDiv'>
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
    <ScrollDialog
    id={id}
    />
    </div>
  );
}
