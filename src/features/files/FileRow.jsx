import Table from "../../UI/Table";
import formatBytes from "../../helpers/bytesFormatter";
import FileName from "./FileName";

function FileRow({ file, children }) {
  return (
    <Table.Row>
      <FileName file={file} />
      <div>
        {file.dateCreated}
      </div>
      <div>{formatBytes(file.size)}</div>
      {children}
    </Table.Row>
  );
}

export default FileRow;
