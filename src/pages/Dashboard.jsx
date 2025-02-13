import styled from "styled-components";
import Usage from "../UI/Usage";
import { HiOutlineDocument, HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";
import FilesTable from "../features/files/FilesTable";
import CardLinks from "../features/Dashboard/CardLinks";
import { useSelector } from "react-redux";
import Media from "../Style/Media";
import { Table } from "antd";
import UploadButton from "../UI/UploadButton";
import UploadButtonDashboard from "../UI/UploadButtonDashboard";
import DashboardTable from "../features/Dashboard/DashboardTable";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem 24rem;
  gap: 2.4rem;
  row-gap: 4.4rem;
  ${Media.laptop`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr auto ;
  `}
  ${Media.tablet`
    grid-template-columns: 1fr;
    row-gap: 2rem;
    /* grid-template-rows: 1fr 1fr auto ; */
  `}
  ${Media.phone`
    grid-template-rows: auto ;
  `}
`;

// const DashboardTable = styled.div`
//   grid-column: 1 / span 2;
//   grid-row: 2 / span 2;
//   overflow-y: scroll;

//   ${Media.laptop`
//     grid-row: 3 / span 2;
//   `}
//   ${Media.tablet`
//     grid-column: 1 / 1;
//     grid-row: 4/ span 2;
//     /* grid-template-rows: 1fr 1fr auto ; */
//   `}

//   -ms-overflow-style: none;
//   scrollbar-width: none;

//   & ::-webkit-scrollbar {
//     display: none;
//   }
// `;

function Dashboard() {
  const files = useSelector((store) => store.files);
  return (
    <StyledDashboardLayout>
      <UploadButtonDashboard />
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
      <DashboardTable files={files} />
      <CardLinks
        starred={files.filter((file) => file.isStarred).length}
        archived={files.filter((file) => file.isArchived).length}
      />
    </StyledDashboardLayout>
  );
}

export default Dashboard;
