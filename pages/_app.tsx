import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../presentation/components/Header'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Palavra } from '../data/entities/Palavra';
import { GetServerSideProps, NextComponentType, NextPageContext } from 'next';
import { PalavraService } from '../data/PalavraService';
import { useRouter } from 'next/router';

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const listaPalavras = await PalavraService.list();

//   return {
//     pageProps : { listaPalavras }
//   }

// }

MyApp.getInitialProps = async (appContext: any) => {
  const listaPalavras = await PalavraService.list();

  return { listaPalavras }
}
const atualizarLista = (value: string, setFilteredList: Dispatch<SetStateAction<Palavra[]>>, setValue: Dispatch<SetStateAction<string>>, listaPalavras: Palavra[]) => {
  if (value !== "") {
    setFilteredList(listaPalavras.filter((e) => e.nomePalavra.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  } else {
    setFilteredList(listaPalavras);
  }
  setValue(value as string);
}

// function MyApp({ Component, pageProps, listaPalavras }: {}) {
function MyApp({ Component, pageProps, listaPalavras }: {Component: NextComponentType<NextPageContext, any, {}>, pageProps: any, listaPalavras: Palavra[]}) {
  const [value, setValue] = useState("");
  const [filteredList, setFilteredList] = useState(listaPalavras);
  const router = useRouter();
  


  useEffect(() => {
    if (router.query.q !== undefined && router.query.q !== "") {
      atualizarLista(router.query.q as string, setFilteredList, setValue, listaPalavras);
    }
  }, [listaPalavras, router.query.q]);
  
  return <>
      <Header value={value} setValue={setValue} filteredList={filteredList} setFilteredList={setFilteredList} atualizarLista={atualizarLista} listaPalavras={listaPalavras} />
      <Component {...pageProps} filteredList={listaPalavras} />
  </>
}

export default MyApp
