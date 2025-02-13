import { HiOutlineArchiveBox } from "react-icons/hi2";
import Heading from "../UI/Heading";
import FilesTable from "../features/files/FilesTable";
import { useSelector } from "react-redux";

function Archived() {
  const files = useSelector((store) => store.files);
  return (
    <>
      <Heading
        heading="Archived Files"
        icon={<HiOutlineArchiveBox />}
        color="pink"
      />
      <FilesTable
        data={files.filter((file) => file.isArchived)}
        deleteAction={true}
        page="archived"
      />
    </>
  );
}

export default Archived;
