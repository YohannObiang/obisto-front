import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons({openpaper}) {
  return (
    <div style={{position: 'fixed', bottom:'45px', right:'20px'}}>
      <Fab color="secondary" aria-label="add" onClick={openpaper}>
        <AddIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </div>
  );
}