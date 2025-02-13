import styled, { css } from "styled-components";

const variations = {
  vertical: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2.6rem;
  `,
  horizontal: css`
    display: flex;
    align-items: center;
    gap: 2.6rem;
  `,
};

const StyledCard = styled.div`
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-50);
  padding: 1.4rem 2.4rem;
  ${(props) => variations[props.type]}
`;

export default StyledCard;
