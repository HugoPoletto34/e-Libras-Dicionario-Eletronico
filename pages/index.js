import React from 'react';
import styled from 'styled-components';
import WordList from '../src/components/WordList';
import NavBar from '../src/components/NavBar';

const Body = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; */
    
    width: 98%;
    margin:  50px auto 0 auto;
    /* margin-top:  50px; */
    background: white;
    padding: 15px;
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <Body>
        {/* {dictionary.map((dic) => (
          <WidgetComponents
            key={dic.id_dictionary}
            title={dic.word_name}
            srcImage={`/srcCards/images/objects/${dic.id_dictionary}.jpg`}
            srcPreview={`/srcCards/images/previews/int-${dic.id_dictionary}.jpg`}
            srcVideo={`/srcCards/videos/${dic.id_dictionary}.mp4`}
          />
        ))} */}
        <WordList />

      </Body>
    </>
  );
}
