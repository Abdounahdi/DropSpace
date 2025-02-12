import Table from "../../UI/Table";
import formatBytes from "../../helpers/bytesFormatter";
import ActionsBox from "../ActionsBox";
import FileName from "./FileName";

function FileRow({ file }) {
  return (
    <Table.Row>
      <FileName name={file.name} type={file.type} />
      <div>
        {file.dateCreated.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div>{formatBytes(file.size)}</div>
      <ActionsBox />
    </Table.Row>
  );
}

export default FileRow;
