import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";
import { useOutsideClick } from "../helpers/useOutsideHook";
import LogoDrop from "../assets/LogoDrop.svg";
import Media from "../Style/Media";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.8rem 4.8rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  border-bottom: 1px solid var(--color-grey-100);
  ${Media.phone`
    padding: 1.8rem 2rem;
    gap:1.5rem;
  `}
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

  position: relative;
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

const PhoneMenu = styled.div`
  display: none;
  ${Media.phone`
    display:block;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 5rem 4rem;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Header() {
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const searchedFiles = useSelector((store) => store.files).filter((file) =>
    file.name.includes(query)
  );

  const ref = useOutsideClick(() => setQuery(""));
  const refMenu = useOutsideClick(closeMenu);

  function handleOpenMenu() {
    setOpenMenu(true);
  }
  function closeMenu() {
    setOpenMenu(false);
  }
  function navigate() {
    setTimeout(() => {
      closeMenu();
    }, 100);
  }

  return (
    <StyledHeader>
      <PhoneMenu onClick={handleOpenMenu}>
        <LogoDrop />
      </PhoneMenu>
      <SearchContainer ref={ref}>
        <HiMagnifyingGlass />
        <Search
          type="text"
          placeholder="search .. "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length ? <SearchResults files={searchedFiles} /> : ""}
      </SearchContainer>
      <UserDetails />
      {openMenu && (
        <Overlay>
          <StyledModal ref={refMenu}>
            <Button onClick={closeMenu}>
              <HiXMark />
            </Button>
            <MainNav onClick={navigate} />
          </StyledModal>
        </Overlay>
      )}
    </StyledHeader>
  );
}

export default Header;
