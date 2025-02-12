import { HiOutlineArchiveBox, HiOutlineStar } from "react-icons/hi2";
import styled, { css } from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

const variations = {
  delete: css`
    background-color: var(--color-red-700);

    &:hover {
      background-color: var();
    }
  `,
  star: css`
    background-color: var(--color-yellow-500);

    &:hover {
      background-color: var(--color-yellow-600);
    }
  `,
};

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  & svg {
    height: 2.4rem;
    width: 2.4rem;
    color: var(--color-grey-0);
    stroke-width: 2;
  }

  ${(props) =>
    variations[props.type]} /* background-color: var(--color-yellow-500); */

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 0;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

function ActionsBox() {
  return (
    <ButtonBox>
      <ActionButton type="star">
        <HiOutlineStar />
      </ActionButton>
      <ActionButton type="delete">
        <HiOutlineArchiveBox />
      </ActionButton>
    </ButtonBox>
  );
}

export default ActionsBox;
