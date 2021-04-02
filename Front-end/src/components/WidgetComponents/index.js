import styled from 'styled-components';
import VideoInterpreter from '../VideoInterpreter';


const Widget = styled.button`
  padding: 0;
  border-radius: 4px;
  border: 1px solid blue;
  margin: 5px;
  width: 255px;
  height: 100%;
  background-color: gray;
  cursor: pointer;
  :hover {
    transform: scale(100px, 100px);
  }
`;

Widget.Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #04afaf;

  h1 {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    word-break: break-word;
    background-color: #96e3ff;
    padding: 5px 0;
    margin: auto 0;
    width: 100%;
    
    border-radius: 2px;
    border: .5px solid #007171;
  }

  img {
    border-radius: 2px;
    border: 1px solid #000000;
    
    height: 50px;
  }

`;

Widget.Content = styled.div`
  img {
    display: block;
  }
  video {
    display: none;
  }

  
  ${Widget}:hover & {
    img {
      display: none;
    }
    video {
      display: block;
    }
  }
`;




export default function WidgetComponents({ title, srcImage, srcPreview, srcVideo }) {
  return(
    <Widget>
      <Widget.Content>
        <img
          src={srcPreview}
          width={"100%"}
          height={150}
        />
        <VideoInterpreter
          src={srcVideo}
          width={"100%"}
          height={"100%"}
          controls={true}
          loop={true}
        />
      </Widget.Content>
      <Widget.Header>
        <h1>{title}</h1>
        <img
          src={srcImage}
        />
      </Widget.Header>
    </Widget>
  );
}
