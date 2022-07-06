import { Autocomplete, TextField } from "@mui/material";
import { GetServerSideProps } from "next";
import { Palavra } from "../../data/entities/Palavra";
import { PalavraService } from "../../data/PalavraService";
import style from "../../styles/Home.module.css";

export default function Header({ listaPalavras }: { listaPalavras: Palavra[] }) {
  const lista = listaPalavras.flatMap(palavra => [palavra.nomePalavra]);

  return (
    <header className={style.header}>
      <p>e-Libras</p>
      <Autocomplete
        disablePortal
        className={style.search}
        id="combo-box-demo"
        options={lista}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Procurar..." />}
      />
    </header>
  );
}