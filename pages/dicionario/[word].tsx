import { Button, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, JSXElementConstructor, ReactFragment, Key } from "react";
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
      <img height={300} width={300}  src="https://api-elibras.herokuapp.com/Images/whatsapp.jpg" alt={palavra.nomePalavra} />
      <Typography variant="body1">{palavra.descPalavra}</Typography>
      <video controls>
        <source src={"https://api-elibras.herokuapp.com/Videos/Whatsapp.mp4"} type="video/mp4" />
      </video>

    </main>
    
  )
}