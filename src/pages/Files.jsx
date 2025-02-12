import { HiOutlineFolderOpen } from "react-icons/hi2";
import files from "../Data/files";
import Heading from "../UI/Heading";
import FilesTable from "../features/files/FilesTable";

function Files() {
  return (
    <>
      <Heading heading="All Files" icon={<HiOutlineFolderOpen />} color="blue" />
      <FilesTable data={files} />
    </>
  );
}

export default Files;
