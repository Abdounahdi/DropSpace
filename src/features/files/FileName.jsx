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

const Icon = styled.div`
  display: flex;
  align-items: center;

  & svg {
    height: 2.4rem;
    width: 2.4rem;
    stroke-width: 2;
  }

  ${(props) => variations[props.type]}
`;

function FileName({ name, type }) {
  return (
    <Box>
      <Icon
        type={type === "image" ? "image" : type === "video" ? "video" : "file"}
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
