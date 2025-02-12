import { HiOutlineDocument } from "react-icons/hi";
import Icon from "./Icon";
import styled, { css } from "styled-components";
import { Progress } from "antd";

const StyledCard = styled.div`
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-500);
  padding: 1.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;
`;

const P = styled.p`
  color: var(--color-grey-0);
`;

function Usage({ color, field , icon }) {
  let strokeColorProgress;
  if (color === "purple") {
    strokeColorProgress = "#863FDD";
  } else if (color === "blue") {
    strokeColorProgress = "#4f46e5";
  } else if (color === "green") {
    strokeColorProgress = "#15803d";
  }
  return (
    <StyledCard>
      <Icon
        style={{ width: "40%", justifyContent: "center" }}
        color={color}
        icon={icon}
      />
      <h2>{field}</h2>
      <Progress
        percent={10}
        percentPosition={{
          align: "start",
          type: "inner",
        }}
        size={[300, 20]}
        strokeColor={strokeColorProgress}
      />
      <P>23 gb out of 100gb</P>
    </StyledCard>
  );
}

export default Usage;
