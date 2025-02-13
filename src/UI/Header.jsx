import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import UserDetails from "./UserDetails";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.8rem 4.8rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  background-color: var(--color-grey-50);
  width: 100%;
  border-radius: var(--border-radius-lg);
  padding: 1.3rem 2rem;
`;

const Search = styled.input`
  border: none;
  gap: 1rem;
  background-color: var(--color-grey-50);
  width: 80%;
  font-size: 1.6rem;
  &:focus {
    outline: none;
    border: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <SearchContainer>
        <HiMagnifyingGlass />
        <Search type="text" placeholder="search .. " />
      </SearchContainer>
      <UserDetails/>
    </StyledHeader>
  );
}

export default Header;
