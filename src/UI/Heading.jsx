import styled, { css } from "styled-components";
import Sort from "./SortBy";
import SortBy from "./SortBy";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const H1 = styled.h1``;

function Heading({ icon, heading, color }) {
  return (
    <Container>
      <TitleContainer>
        <Icon color={color} icon={icon} />
        <H1>{heading}</H1>
      </TitleContainer>
      <SortBy
        options={[
          { value: "date-asc", label: "Sort by date (Earlier first)" },
          { value: "size-asc", label: "Sort by size (Low first)" },
          { value: "date-desc", label: "Sort by date (Recent first)" },
          { value: "size-desc", label: "Sort by date (Larger first)" },
        ]}
      />
    </Container>
  );
}

export default Heading;
