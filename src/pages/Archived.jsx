import { HiOutlineArchiveBox } from "react-icons/hi2";
import Heading from "../UI/Heading";
import files from "../Data/files";
import FilesTable from "../features/files/FilesTable";
import ActionsBox from "../features/ActionsBox";

function Archived() {
  
  return <>
  <Heading
    heading="Starred Files"
    icon={<HiOutlineArchiveBox />}
    color="pink"
  />
  <FilesTable data={files.filter((file) => file.isArchived)}>
    <ActionsBox deleteAction={true} />
  </FilesTable>
</>;
}

export default Archived;
