import styled from "styled-components";
import LogoDrop from "../assets/LogoDrop.svg";
import Media from "../Style/Media";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.div`
  height: 9.6rem;
  width: auto;
  ${Media.laptopMini`
    
  `}
`;

const Title = styled.h2``;

function Logo() {
  return (
    <StyledLogo>
      <Img>
        <LogoDrop />
        <Title>DROPSPACE</Title>
      </Img>
    </StyledLogo>
  );
}

export default Logo;
