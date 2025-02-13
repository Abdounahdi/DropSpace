import {
  HiOutlineDocument,
  HiOutlinePhoto,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import styled, { css } from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const variations = {
  video: css`
    color: var(--color-green-700);
  `,
  image: css`
    color: var(--color-brand-600);

    & svg {
      stroke-width: 2.2;
    }
  `,
  file: css`
    color: var(--color-purple-700);
  `,
};

const tags = {
  starred: css`
    &::after {
      content: "";
      width: 7px;
      height: 7px;
      background-color: var(--color-yellow-600);
      border-radius: 50%;
      margin-left: 5px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  `,
  archived: css`
    &::before {
      content: "";
      width: 7px;
      height: 7px;
      background-color: var(--color-pink-500);
      border-radius: 50%;
      margin-left: 5px;
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & svg {
    height: 2.4rem;
    width: 2.4rem;
    stroke-width: 2;
  }

  ${(props) => tags[props.isArchived]}
  ${(props) => tags[props.isStarred]}
  ${(props) => variations[props.type]}
`;

function FileName({ file }) {
  const { type, name, isStarred, isArchived } = file;
  return (
    <Box>
      <Icon
        type={type === "image" ? "image" : type === "video" ? "video" : "file"}
        isStarred={isStarred ? "starred" : ""}
        isArchived={isArchived ? "archived" : ""}
      >
        {type === "video" ? (
          <HiOutlineVideoCamera />
        ) : type === "image" ? (
          <HiOutlinePhoto />
        ) : (
          <HiOutlineDocument />
        )}
      </Icon>
      {name}
    </Box>
  );
}

export default FileName;
