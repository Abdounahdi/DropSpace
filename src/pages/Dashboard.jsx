import styled from "styled-components";
import Usage from "../UI/Usage";
import { HiOutlineDocument, HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import files from "../Data/files";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardTable = styled.div`
  grid-column: 1 / span 2;
`;

function Dashboard() {
  return (
    <StyledDashboardLayout>
      <Usage color="purple" field="Documents" icon={<HiOutlineDocument />} />
      <Usage color="blue" field="Images" icon={<HiOutlinePhoto />} />
      <Usage color="green" field="Videos" icon={<HiOutlineVideoCamera />} />
      <DashboardTable>
        <h1>Recent Files</h1>
        <FilesTable data={files} inDashboard={true}/>
      </DashboardTable>
    </StyledDashboardLayout>
  );
}

export default Dashboard;
