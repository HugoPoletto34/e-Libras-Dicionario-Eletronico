import { List, ListItem, Card, CardActionArea, CardContent, Typography, Divider } from "@mui/material";
import router from "next/router";
import { Palavra } from "../../data/entities/Palavra";
import style from "../../styles/Home.module.css";

interface Ssa {
  letra: string;
  lista: Palavra[];
}

const listaAlfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function mapearListaDePalavrasPorOrdemAlfabetica(lista: Palavra[]) {
  let listaDePalavrasPorOrdemAlfabetica: Ssa[] = [];
  listaAlfabeto.forEach((letra) => {
      listaDePalavrasPorOrdemAlfabetica.push({ letra, lista: lista.filter((palavra) => palavra.nomePalavra.charAt(0) === letra) });
  });
  return listaDePalavrasPorOrdemAlfabetica;
}

export default function ListaDicionario({ filteredList, doOnClick }: {filteredList: Palavra[], doOnClick: () => void}) {
  const listaDePalavrasPorOrdemAlfabetica = mapearListaDePalavrasPorOrdemAlfabetica(filteredList);
  // console.log(listaDePalavrasPorOrdemAlfabetica)
  return (
    <>
      {listaDePalavrasPorOrdemAlfabetica != null  ? <List>
      {listaDePalavrasPorOrdemAlfabetica.map(palavra => {
        return (
          <div key={palavra.letra}>
            {palavra.lista.length > 0 ? 
            <>
              <Typography variant="h6" className={style.titleLetra}>
                {palavra.letra}
              </Typography>
              {palavra.lista.map(palavra => {
                return (
                  <>
                    <ListItem alignItems="center" key={palavra.nomePalavra} className={style.containerCartao}>
            
                      <Card className={style.cartao}>
                        <CardActionArea onClick={() => {
                          router.push(`/dicionario/${palavra.nomePalavra}`);
                          doOnClick();
                        }}>
                          <CardContent>
                            <div className={style.cardTitle} >
                              <img width={80} src={"https://" + palavra.imageFileName} alt={palavra.nomePalavra} />
                              <Typography gutterBottom variant="h5" component="h5">
                                {palavra.nomePalavra}
                              </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" className={style.descPalavra}>
                              {palavra.descPalavra}
                            </Typography>
                            <img className={style.imageLibras} width={40} src={"/libras.png"} alt={palavra.nomePalavra} />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                )
              })}
            </> : <></>}
          </div>
        )
      })}
      
    </List> : <p>Lista Não encontrado</p>}
    </>
  );
}

{/*  */}