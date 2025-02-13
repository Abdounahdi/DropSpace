import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const H1 = styled.h1``;

function Heading({ icon, heading, color , children}) {
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
