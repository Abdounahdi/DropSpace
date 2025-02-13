import Icon from "./Icon";
import styled from "styled-components";
import { Progress } from "antd";
import StyledCard from "./StyledCard";
import { useDispatch, useSelector } from "react-redux";
import formatBytes from "../helpers/bytesFormatter";
import { limitReached } from "../redux/limitsSlice";
import Media from "../Style/Media";

const P = styled.p`
  color: var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: 500;
`;

const TextContainer = styled.div`
  & span {
    display: none !important;
  }
`;

const B = styled.b`
  color: var(--color-grey-800);
  ${Media.phone`
    display:none;
  `}
`;

const H = styled.h3`
  font-size: 2.1rem;
  font-weight: 600;
`;

const RowText = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const HUNDRED_GEGABYTE = 100000000000;

function Usage({ color, field, icon, value, style }) {
  const files = useSelector((store) => store.files);
  const sizeUsed = files
    .filter((file) => file.type === value)
    .reduce((acc, curr) => acc + curr.size, 0);
  const precentage = ((sizeUsed * 100) / HUNDRED_GEGABYTE).toFixed(0);
  let progressLength;

  // if (window.matchMedia("(max-width: 880px)").matches) {
  //   progressLength = 500;
  // } else {
  //   progressLength = 300;
  // }

  const dispatch = useDispatch();

  if (precentage >= 100) {
    dispatch(limitReached(value));
  }

  let strokeColorProgress;
  if (color === "purple") {
    strokeColorProgress = "#863FDD";
  } else if (color === "blue") {
    strokeColorProgress = "#4f46e5";
  } else if (color === "green") {
    strokeColorProgress = "#15803d";
  }

  return (
    <StyledCard type="vertical" style={style}>
      <Icon
        style={{ padding: "1.6rem", justifyContent: "center" }}
        color={color}
        icon={icon}
      />
      <TextContainer>
        <H>{field}</H>
        <Progress
          percent={precentage}
          percentPosition={{
            align: "start",
            type: "inner",
          }}
          size={[progressLength, 12]}
          strokeColor={strokeColorProgress}
        />
        <RowText>
          <B>{precentage}%</B>
          <P>{formatBytes(sizeUsed)} of 80gb Used</P>
        </RowText>
      </TextContainer>
    </StyledCard>
  );
}

export default Usage;
