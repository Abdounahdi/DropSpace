import styled from "styled-components";
import Table from "../../UI/Table";
import formatBytes from "../../helpers/bytesFormatter";
import FileName from "./FileName";
import Media from "../../Style/Media";

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

function FileRow({ file, children, showTags }) {
  return (
    <Table.Row>
      <FileName file={file} showTags={showTags} />
      <DivTablet>{file.dateCreated}</DivTablet>
      <DivPhone>{formatBytes(file.size)}</DivPhone>
      {children}
    </Table.Row>
  );
}

export default FileRow;
