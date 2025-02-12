import { HiOutlineStar } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import Heading from "../UI/Heading";
import files from "../Data/files";
import ActionsBox from "../features/ActionsBox";

function Starred() {
  return (
    <>
      <Heading
        heading="Starred Files"
        icon={<HiOutlineStar />}
        color="yellow"
      />
      <FilesTable data={files.filter((file) => file.isStarred)}>
        <ActionsBox deleteAction={true} />
      </FilesTable>
    </>
  );
}

export default Starred;
