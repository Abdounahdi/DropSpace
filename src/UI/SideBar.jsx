import styled from "styled-components";
import Logo from "./Logo";
import UploadButton from "./UploadButton";
import MainNav from "./MainNav";
import Media from "../Style/Media";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${Media.laptopMini`
    & h2 , span , p{
      display:none;
    }
  `}

  ${Media.phone`
    display:none;
  `}
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <UploadButton />
      <MainNav />
    </StyledSideBar>
  );
}

export default SideBar;
