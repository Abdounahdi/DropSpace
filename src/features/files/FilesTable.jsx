import Table from "../../UI/Table";
import FileRow from "./FileRow";

function FilesTable({ data, children, inDashboard = false }) {
  return (
    <Table columns={inDashboard ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div>Name</div>
        <div>Date Created</div>
        <div>Size</div>
        {inDashboard ? "" : <div>Actions</div>}
      </Table.Header>
      <Table.Body
        data={data}
        render={(file) => (
          <FileRow file={file} key={file.dateCreated}>
            {children}
          </FileRow>
        )}
      />
    </Table>
  );
}

export default FilesTable;
