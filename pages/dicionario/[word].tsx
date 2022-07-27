import { Button, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Palavra } from "../../data/entities/Palavra";
import { PalavraService } from "../../data/PalavraService";
import style from "../../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const word = ctx.query.word as string;
  const palavra = await PalavraService.get(word);

  return {
    props : { palavra }
  }

}

export default function Word( { palavra }: {palavra: Palavra}) {
  return (
    <main className={style.main}>
        <Typography variant="h4" >{palavra.nomePalavra}</Typography>
      <div className={style.content}>
        <video autoPlay={true} controls className={style.videoSinal} >
          <source src={"https://" + palavra.videoFileName} />
        </video>
        <img className={style.imageRef} src={"https://" + palavra.imageFileName} alt={palavra.nomePalavra} />
        <Typography variant="body1" className={style.descPalavra}>{palavra.descPalavra}</Typography>

      </div>


    </main>
    
  )
}