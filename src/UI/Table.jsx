import { createContext, useContext } from "react";
import styled from "styled-components";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import Media from "../Style/Media";

const StyledTable = styled.div`
  /* border: 1px solid var(--color-grey-200); */

  font-size: 1.4rem;
  /* background-color: var(--color-grey-0); */
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  ${Media.tabletMini`
    grid-template-columns: 2fr 1fr 1fr ; 
  `}
  ${Media.phone`
    grid-template-columns: 2fr 1fr ; 
  `}
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  font-size: 1.3rem;
  /* background-color: var(--color-grey-50); */
  border-bottom: 1px solid var(--color-grey-100);
  /* text-transform: uppercase; */
  letter-spacing: 0.4px;
  font-weight: 400;
  color: var(--color-grey-600);

  /* & div{
    text-align: center;

  } */
  & :last-child {
    text-align: end;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  & :last-child {
    text-align: end;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data?.length)
    return (
      <Empty>
        <HiArchiveBoxXMark /> <span>No data to show at the moment !</span>
      </Empty>
    );
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
