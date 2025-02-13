import Table from "../../UI/Table";
import ActionsBox from "./ActionsBox";
import FileRow from "./FileRow";

function FilesTable({
  data,
  page,
  inDashboard = false,
  starAction,
  archiveAction,
  deleteAction,
}) {
  return (
    <Table columns={inDashboard ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div>Name</div>
        <div>Date Created</div>
        <div style={{textAlign:"start"}}>Size</div>
        {inDashboard ? "" : <div>Actions</div>}
      </Table.Header>
      <Table.Body
        data={data}
        render={(file) => (
          <FileRow file={file} key={file.id}>
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
