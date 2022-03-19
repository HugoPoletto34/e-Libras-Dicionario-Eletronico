import React, { useEffect, useState } from 'react';
import {
  List, ListItem, ListItemText, ListSubheader,
  Divider, Autocomplete, TextField,
} from '@mui/material';
import fetchDictionary from '../../api';

export default function WordList() {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    fetchDictionary()
      .then((response) => setDictionary(Object.values(response.data)))
      .catch(() => alert('Erro ao listar dicionarios'));
  }, []);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <List
        sx={{
          width: '100%',
          maxWidth: 260,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {['lista_01', 'lista_02', 'lista_03'].map((sectionId) => (
          <li key={`${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {dictionary.map((item) => (
                <div style={{ margin: '2px 2px' }}>
                  <Divider />
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={` - ${item.word_name}`} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </>

  );
}
