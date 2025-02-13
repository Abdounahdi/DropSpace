import Icon from "./Icon";
import styled from "styled-components";
import { Progress } from "antd";
import StyledCard from "./StyledCard";
import { useDispatch, useSelector } from "react-redux";
import formatBytes from "../helpers/bytesFormatter";
import { limitReached } from "../redux/limitsSlice";

const P = styled.p`
  color: var(--color-grey-500);
`;

const TextContainer = styled.div`
  & span {
    display: none !important;
  }
`;

const B = styled.b`
  color: var(--color-grey-800);
`;

const RowText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HUNDRED_GEGABYTE = 100000000000;

function Usage({ color, field, icon, value }) {
  const files = useSelector((store) => store.files);
  const sizeUsed = files
    .filter((file) => file.type === value)
    .reduce((acc, curr) => acc + curr.size, 0);
  const precentage = ((sizeUsed * 100) / HUNDRED_GEGABYTE).toFixed(0);

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
    <StyledCard type="vertical">
      <Icon
        style={{ width: "40%", justifyContent: "center" }}
        color={color}
        icon={icon}
      />
      <h2>{field}</h2>
      <TextContainer>
        <Progress
          percent={precentage}
          percentPosition={{
            align: "start",
            type: "inner",
          }}
          size={[300, 20]}
          strokeColor={strokeColorProgress}
        />
        <RowText>
          <B>{precentage}%</B>
          <P>{formatBytes(sizeUsed)} out of 100gb</P>
        </RowText>
      </TextContainer>
    </StyledCard>
  );
}

export default Usage;
