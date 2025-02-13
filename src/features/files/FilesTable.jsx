import styled from "styled-components";
import Table from "../../UI/Table";
import ActionsBox from "./ActionsBox";
import FileRow from "./FileRow";
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

function FilesTable({
  data,
  page,
  inDashboard = false,
  starAction,
  archiveAction,
  deleteAction,
  showTags = false,
}) {
  return (
    <Table columns={inDashboard ? "2fr 1fr 1fr" : "2fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div>Name</div>
        <DivTablet>Date Created</DivTablet>
        <DivPhone style={{ textAlign: "start" }}>Size</DivPhone>
        {inDashboard ? "" : <div>Actions</div>}
      </Table.Header>
      <Table.Body
        data={data}
        render={(file) => (
          <FileRow file={file} key={file.id} showTags={showTags}>
            <ActionsBox
              page={page}
              starAction={starAction}
              archiveAction={archiveAction}
              deleteAction={deleteAction}
              id={file.id}
            />
          </FileRow>
        )}
      />
    </Table>
  );
}

export default FilesTable;
