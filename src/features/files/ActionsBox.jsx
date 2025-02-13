import {
  HiOutlineArchiveBox,
  HiOutlineStar,
  HiOutlineTrash,
} from "react-icons/hi2";
import styled, { css } from "styled-components";
import { archiveFile, starFile } from "../../redux/filesSlice";
import { useDispatch } from "react-redux";

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
  archive: css`
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

function ActionsBox({
  page,
  deleteAction = false,
  starAction = false,
  archiveAction = false,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <ButtonBox>
      {starAction && (
        <ActionButton type="star" onClick={() => dispatch(starFile(id))}>
          <HiOutlineStar />
        </ActionButton>
      )}
      {deleteAction && (
        <ActionButton
          type="delete"
          onClick={() =>
            page === "starred"
              ? dispatch(starFile(id))
              : dispatch(archiveFile(id))
          }
        >
          <HiOutlineTrash />
        </ActionButton>
      )}
      {archiveAction && (
        <ActionButton type="archive" onClick={() => dispatch(archiveFile(id))}>
          <HiOutlineArchiveBox />
        </ActionButton>
      )}
    </ButtonBox>
  );
}

export default ActionsBox;
