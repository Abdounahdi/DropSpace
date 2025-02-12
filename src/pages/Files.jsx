import { HiOutlineFolderOpen } from "react-icons/hi2";
import files from "../Data/files";
import Heading from "../UI/Heading";
import FilesTable from "../features/files/FilesTable";
import ActionsBox from "../features/ActionsBox";

function Files() {
  return (
    <>
      <Heading
        heading="All Files"
        icon={<HiOutlineFolderOpen />}
        color="blue"
      />
      <FilesTable data={files}>
        <ActionsBox starAction={true} archiveAction={true} />
      </FilesTable>
    </>
  );
}

export default Files;
