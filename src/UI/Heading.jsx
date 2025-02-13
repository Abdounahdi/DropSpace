import styled from "styled-components";
import Icon from "./Icon";
import Media from "../Style/Media";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Media.tabletMini`
    flex-direction:column;
    align-items:start;
    gap:1.6rem;
    font-size:1.2rem;
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const H1 = styled.h1``;

function Heading({ icon, heading, color, children }) {
  return (
    <Container>
      <TitleContainer>
        <Icon color={color} icon={icon} />
        <H1>{heading}</H1>
      </TitleContainer>
      {children}
    </Container>
  );
}

export default Heading;
