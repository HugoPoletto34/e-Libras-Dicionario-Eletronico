import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// const theme =
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-Libras Dicionário Eletrônico</title>
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
