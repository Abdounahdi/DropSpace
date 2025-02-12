import Table from "../../UI/Table";
import FileRow from "./FileRow";

function FilesTable({data}) {
  return (
    <Table columns={"1fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div>Name</div>
        <div>Date Created</div>
        <div>Size</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(file) => <FileRow file={file} key={file.dateCreated} />}
      />
    </Table>
  );
}

export default FilesTable;
