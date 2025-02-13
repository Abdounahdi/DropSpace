import styled from "styled-components";
import Media from "../../Style/Media";

import { HiArchiveBoxXMark } from "react-icons/hi2";
import FileRow from "../files/FileRow";
import FileName from "../files/FileName";
import formatBytes from "../../helpers/bytesFormatter";

const StyledTable = styled.div`
  /* border: 1px solid var(--color-grey-200); */

  font-size: 1.4rem;
  /* background-color: var(--color-grey-0); */
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  ${Media.tabletMini`
    grid-template-columns: 2fr 1fr ; 
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

function TableBody({ data, children }) {
  if (!data?.length)
    return (
      <Empty>
        <HiArchiveBoxXMark /> <span>No data to show at the moment !</span>
      </Empty>
    );
  return <StyledBody>{children}</StyledBody>;
}

const H = styled.h1`
  font-size: 4.3rem;
  color: var(--color-grey-800);
`;

const DashboardTableStyle = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  overflow-y: scroll;

  ${Media.laptop`
    grid-row: 3 / span 2;
  `}

  ${Media.tablet`
    grid-column: 1 / 1;
    grid-row: 4/ span 2;
    /* grid-template-rows: 1fr 1fr auto ; */
    `}
    ${Media.phone`
      grid-row: 5 / span 2;
    `}

  -ms-overflow-style: none;
  scrollbar-width: none;

  & ::-webkit-scrollbar {
    display: none;
  }
`;

const DivTablet = styled.div`
  ${Media.tabletMini`
    display:none;
  `}
`;
const DivPhone = styled.div`
  ${Media.phone`
    display:none;
  `}
`;

function DashboardTable({ files }) {
  return (
    <DashboardTableStyle>
      <H>Recent Files</H>
      <StyledTable>
        <StyledHeader>
          <div>Name</div>
          <DivTablet>Date Created</DivTablet>
          <div>Size</div>
        </StyledHeader>
        <TableBody data={files}>
          {files.map((file) => (
            <StyledRow key={file.id}>
              <FileName file={file} showTags={false} />
              <DivTablet>{file.dateCreated}</DivTablet>
              <div>{formatBytes(file.size)}</div>
            </StyledRow>
          ))}
        </TableBody>
      </StyledTable>
    </DashboardTableStyle>
  );
}

export default DashboardTable;
