import { HiOutlineStar } from "react-icons/hi2";
import Icon from "../../UI/Icon";
import StyledCard from "../../UI/StyledCard";
import styled from "styled-components";
import { HiOutlineArchive } from "react-icons/hi";
import { NavLink } from "react-router";

const StyledLink = styled(NavLink)`
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const H = styled.h3`
  font-size: 2rem;
`;

const P = styled.p`
  color: var(--color-grey-400);
  font-weight: 500;
`

function CardLinks({ starred, archived }) {
  return (
    <Row>
      <StyledCard type="horizontal">
        <Icon
          color="yellow"
          icon={<HiOutlineStar />}
          style={{ padding: "1rem", justifyContent: "center" }}
        />
        <StyledLink to="/files-starred">
          <H>{starred} Starred Files</H>
          <P>Go to view</P>
        </StyledLink>
      </StyledCard>
      <StyledCard type="horizontal">
        <Icon
          color="pink"
          icon={<HiOutlineArchive />}
          style={{ padding: "1rem", justifyContent: "center" }}
        />
        <StyledLink to="/files-archived">
          <H>{archived} Archived Files</H>
          <P>Go to view</P>
        </StyledLink>
      </StyledCard>
    </Row>
  );
}

export default CardLinks;
