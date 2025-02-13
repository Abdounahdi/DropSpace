import styled, { css } from "styled-components";
import Media from "../Style/Media";

const variations = {
  vertical: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    ${Media.tablet`
      flex-direction:row;
    `}
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
  padding: 2rem 2.4rem;
  ${(props) => variations[props.type]}
`;

export default StyledCard;
