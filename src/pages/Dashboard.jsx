import styled from "styled-components";
import Usage from "../UI/Usage";
import { HiOutlineDocument, HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import CardLinks from "../features/Dashboard/CardLinks";
import { useSelector } from "react-redux";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem 24rem;
  gap: 2.4rem;
  row-gap: 4.4rem;
`;

const DashboardTable = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  & ::-webkit-scrollbar {
    display: none;
  }
`;

function Dashboard() {
  const files = useSelector((store) => store.files);
  return (
    <StyledDashboardLayout>
      <Usage
        color="purple"
        field="Documents"
        icon={<HiOutlineDocument />}
        value="file"
      />
      <Usage
        color="blue"
        field="Images"
        icon={<HiOutlinePhoto />}
        value="image"
      />
      <Usage
        color="green"
        field="Videos"
        icon={<HiOutlineVideoCamera />}
        value="video"
      />
      <DashboardTable>
        <h1>Recent Files</h1>
        <FilesTable data={files} inDashboard={true} />
      </DashboardTable>
      <CardLinks
        starred={files.filter((file) => file.isStarred).length}
        archived={files.filter((file) => file.isArchived).length}
      />
    </StyledDashboardLayout>
  );
}

export default Dashboard;
