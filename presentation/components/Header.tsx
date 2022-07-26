import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Palavra } from "../../data/entities/Palavra";
import style from "../../styles/Home.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import Image from "next/image";
import React from "react";
import ListaDicionario from "./ListaDicionario";
import CloseIcon from '@mui/icons-material/Close';

export default function Header({value, setValue, filteredList, setFilteredList, listaPalavras, atualizarLista} : {value: string, setValue: Dispatch<SetStateAction<string>>, setFilteredList: Dispatch<SetStateAction<Palavra[]>>,listaPalavras: Palavra[], atualizarLista: (value: string, setFilteredList: Dispatch<SetStateAction<Palavra[]>>, setValue: Dispatch<SetStateAction<string>>, listaPalavras: Palavra[]) => void, filteredList: Palavra[]}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <header className={style.header}>

      <Image onClick={() => router.push("./")} width={150} height={50} src="/logoooo.png" alt="e-libras" />
      <div className={style.search}>
        <Button onClick={handleOpen} variant="outlined"  sx={{ color: "#ffffffa4", borderColor: "#ffffffa4" }} endIcon={<SearchIcon />}>
          Buscar...
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="search"
          aria-describedby="parent-modal-description"
          onFocus={() => {
            if (inputRef.current)
              inputRef.current.querySelector("input")?.focus();
          }
          }
        >
          <Box className={style.modalSearch} >
            <IconButton style={{ float: 'right' }} onClick={handleClose} color="default" aria-label="upload picture" component="label">
              <CloseIcon />
            </IconButton>
            <TextField
              ref={inputRef}
              id="search"
              color="info"
              autoComplete="off"
              value={value}
              onChange={(event: any) => {
                atualizarLista(event.target.value, setFilteredList, setValue, listaPalavras);
                setValue(event.target.value);
              }}
              className={style.searchInput}
              >

            </TextField>
            <div style={{ overflowY: 'scroll', height: '83%' }}>
              <ListaDicionario filteredList={filteredList} doOnClick={handleClose}/>
            </div>               

          </Box>
        </Modal>

        
      </div>

    </header>
  );
}