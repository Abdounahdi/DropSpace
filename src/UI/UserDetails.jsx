import { HiOutlineUserCircle } from "react-icons/hi2";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 100%;
  background-color: var(--color-grey-50);
  cursor: pointer;
  & svg {
    color: var(--color-grey-600);
    height: 3.4rem;
    width: 3.4rem;
  }
`;
function UserDetails() {
  return (
    <UserContainer>
      <Icon>
        <HiOutlineUserCircle />
      </Icon>
    </UserContainer>
  );
}

export default UserDetails;
