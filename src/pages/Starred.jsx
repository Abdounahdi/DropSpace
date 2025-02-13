import { HiOutlineStar } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import Heading from "../UI/Heading";
import ActionsBox from "../features/files/ActionsBox";
import { useSelector } from "react-redux";

function Starred() {
  const files = useSelector((store) => store.files);
  return (
    <>
      <Heading
        heading="Starred Files"
        icon={<HiOutlineStar />}
        color="yellow"
      />
      <FilesTable
        data={files.filter((file) => file.isStarred)}
        deleteAction={true}
        page="starred"
      />
    </>
  );
}

export default Starred;
