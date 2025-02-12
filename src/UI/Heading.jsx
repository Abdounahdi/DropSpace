import styled, { css } from "styled-components";
import Sort from "./Sort";

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

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: var(--border-radius-lg);

  & svg {
    height: 5rem;
    width: 5rem;
    color: var(--color-grey-0);
    stroke-width: 2;
  }

  ${(props) => variations[props.color]}
`;

const variations = {
  blue: css`
    background-color: var(--color-brand-600);
  `,
  yellow: css`
    background-color: var(--color-yellow-500);
  `,
  pink: css`
    background-color: var(--color-pink-500);
  `,
};

const H1 = styled.h1``;

function Heading({ icon, heading, color }) {
  return (
    <Container>
      <TitleContainer>
        <Icon color={color}>{icon}</Icon>
        <H1>{heading}</H1>
      </TitleContainer>
      <Sort/>
    </Container>
  );
}

export default Heading;
