import styled from 'styled-components';

const Bar = styled.nav`
  height: 57px;
  background-color: #1f1f1f;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  img {
    padding: 5px;
  }
`

export default function NavBar() {
  return(

    <Bar>
      <img
        src={"/elib_logo.png"}
        height={"100%"}
      />
    </Bar>

  );
}
