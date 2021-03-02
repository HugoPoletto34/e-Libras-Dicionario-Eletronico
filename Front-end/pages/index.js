import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WidgetComponents from '../src/components/WidgetComponents';
import NavBar from '../src/components/NavBar';
import fetchDictionary from '../src/api';

const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    width: 75%;
    margin:  50px auto 0 auto;
    background: white;
    padding: 15px;
`;

export default function Home() {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    fetchDictionary()
      .then((response) => setDictionary(Object.values(response.data)))
      .catch(() => alert('Erro ao listar dicionarios'));
  }, []);

  return (
    <>
      <NavBar />
      <Body>
        {dictionary.map((dic) => (
          <WidgetComponents
            key={dic.id_dictionary}
            title={dic.word_name}
            srcImage={`/srcCards/images/objects/${dic.id_dictionary}.jpg`}
            srcPreview={`/srcCards/images/previews/int-${dic.id_dictionary}.jpg`}
            srcVideo={`/srcCards/videos/${dic.id_dictionary}.mp4`}
          />
        ))}
      </Body>
    </>
  );
}
