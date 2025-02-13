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

function CardLinks({ starred, archived }) {
  return (
    <Row>
      <StyledCard type="horizontal">
        <Icon
          color="yellow"
          icon={<HiOutlineStar />}
          style={{ width: "30%", justifyContent: "center" }}
        />
        <StyledLink to="/files-starred">
          <h2>{starred} Starred Files</h2>
          <p>Go to view</p>
        </StyledLink>
      </StyledCard>
      <StyledCard type="horizontal">
        <Icon
          color="pink"
          icon={<HiOutlineArchive />}
          style={{ width: "30%", justifyContent: "center" }}
        />
        <StyledLink to="/files-archived">
          <h2>{archived} Archived Files</h2>
          <p>Go to view</p>
        </StyledLink>
      </StyledCard>
    </Row>
  );
}

export default CardLinks;
