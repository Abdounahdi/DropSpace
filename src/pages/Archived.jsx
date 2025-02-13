import { HiOutlineArchiveBox } from "react-icons/hi2";
import Heading from "../UI/Heading";
import FilesTable from "../features/files/FilesTable";
import { useSelector } from "react-redux";
import SortBy from "../UI/SortBy";
import { useSearchParams } from "react-router";

function Archived() {
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
      <Heading
        heading="Archived Files"
        icon={<HiOutlineArchiveBox />}
        color="pink"
      >
        <SortBy
          options={[
            { value: "dateCreated-asc", label: "Sort by date (Earlier first)" },
            { value: "dateCreated-desc", label: "Sort by date (Recent first)" },
            { value: "size-asc", label: "Sort by size (Low first)" },
            { value: "size-desc", label: "Sort by size (Larger first)" },
          ]}
        />
      </Heading>
      <FilesTable
        data={[...files].filter((file) => file.isArchived).sort(compareFn)}
        deleteAction={true}
        page="archived"
      />
    </>
  );
}

export default Archived;
