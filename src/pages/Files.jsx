import { HiOutlineFolderOpen } from "react-icons/hi2";
import Heading from "../UI/Heading";
import FilesTable from "../features/files/FilesTable";
import { useSelector } from "react-redux";

function Files() {
  const files = useSelector((store) => store.files);
  return (
    <>
      <Heading
        heading="All Files"
        icon={<HiOutlineFolderOpen />}
        color="blue"
      />
      <FilesTable data={files} starAction={true} archiveAction={true} />
    </>
  );
}

export default Files;
