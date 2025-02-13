import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../UI/Header";
import SideBar from "../UI/SideBar";
import Media from "../Style/Media";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  ${Media.laptopMini`
    grid-template-columns: 10rem 1fr;
  `}
  ${Media.phone`
    grid-template-columns:1fr;
  `}
`;

const Main = styled.main`
  /* background-color: var(--color-grey-50); */
  padding: 4rem 4rem 6.4rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${Media.phone`
    padding: 2rem ;
  `}
`;

const Container = styled.div`
  max-width: 135rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
