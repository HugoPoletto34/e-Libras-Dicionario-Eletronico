import { List, ListItem, Card, CardActionArea, CardContent, Typography, Divider } from "@mui/material";
import router from "next/router";
import { Palavra } from "../../data/entities/Palavra";
import style from "../../styles/Home.module.css";

export default function ListaDicionario({ filteredList, doOnClick }: {filteredList: Palavra[], doOnClick: () => void}) {
  return (
    <>
      {filteredList != null  ? <List>
      {filteredList.map(palavra => {
        return (
          <>
          <ListItem alignItems="center" key={palavra.nomePalavra} className={style.asd}>
  
            <Card sx={{ width: "100%" }}>
              <CardActionArea onClick={() => {
                router.push(`/dicionario/${palavra.nomePalavra}`);
                doOnClick();
              }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {palavra.nomePalavra}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {palavra.descPalavra}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        )
      })}
      
    </List> : <p>Lista Não encontrado</p>}
    </>
  );
}