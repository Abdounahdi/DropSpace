import styled, { css } from "styled-components";

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
  purple: css`
    background-color: var(--color-purple-600);
  `,
  green: css`
    background-color: var(--color-green-700);
  `,
};

const StyledIcon = styled.div`
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

function Icon({ color, icon , style}) {
  return <StyledIcon style={style} color={color}>{icon}</StyledIcon>;
}
export default Icon;
