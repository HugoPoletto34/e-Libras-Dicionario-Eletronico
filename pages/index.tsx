import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import Error from 'next/error';
import { Fragment } from 'react';
import { Palavra } from '../data/entities/Palavra';
import { PalavraService } from '../data/PalavraService';
import Header from '../presentation/components/Header';
import style from "../styles/Home.module.css"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const listaPalavras = await PalavraService.list();

  return {
    props : { listaPalavras }
  }

}

export default function Home({ listaPalavras } : {listaPalavras: Palavra[]}) {
  return (
    <>
    <Header listaPalavras={listaPalavras}/>
    <List className={style.g}>
      {listaPalavras.map(palavra => {
        return (
          <>
          <ListItem alignItems="center" key={palavra.nomePalavra} className={style.asd}>
            <ListItemText
              primary={palavra.nomePalavra}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {palavra.descPalavra}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        )
      })}
      
    </List>
    </>
  );
}