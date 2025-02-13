import { HiOutlineStar } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import Heading from "../UI/Heading";
import ActionsBox from "../features/files/ActionsBox";
import { useSelector } from "react-redux";
import SortBy from "../UI/SortBy";
import { useSearchParams } from "react-router";

function Starred() {
  const files = useSelector((store) => store.files);
  const [searchParams] = useSearchParams();
  const sort = (searchParams.get("sortBy") || "date-asc").split("-");
  const [sortBy, sortOrder] = sort;
  function compareFn(a, b) {
    if (sortOrder === "asc") {
      if (sortBy === "dateCreated") {
        return new Date(a[sortBy]) - new Date(b[sortBy]);
      } else {
        return a[sortBy] - b[sortBy];
      }
    } else {
      if (sortBy === "dateCreated") {
        return new Date(b[sortBy]) - new Date(a[sortBy]);
      } else {
        return b[sortBy] - a[sortBy];
      }
    }
  }
  return (
    <>
      <Heading heading="Starred Files" icon={<HiOutlineStar />} color="yellow">
        <SortBy
          options={[
            { value: "date-asc", label: "Sort by date (Earlier first)" },
            { value: "date-desc", label: "Sort by date (Recent first)" },
            { value: "size-asc", label: "Sort by size (Low first)" },
            { value: "size-desc", label: "Sort by size (Larger first)" },
          ]}
        />
      </Heading>
      <FilesTable
        data={[...files].filter((file) => file.isStarred).sort(compareFn)}
        deleteAction={true}
        page="starred"
      />
    </>
  );
}

export default Starred;
