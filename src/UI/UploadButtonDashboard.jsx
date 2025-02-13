import styled from "styled-components";
import { HiMiniArrowUpOnSquareStack } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { createFile } from "../redux/filesSlice";
import toast from "react-hot-toast";
import Media from "../Style/Media";

const Label = styled.label`
  display: none !important;
  ${Media.phone`
    display:flex !important ; 
  `}
  padding: 6px 12px;
  cursor: pointer;

  & input[type="file"] {
    display: none;
  }

  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  font-size: 2rem;
  padding: 1.2rem 2.4rem;
  ${Media.laptopMini`
    padding: 1.2rem 1.4rem;
  `}
  font-weight: 500;

  width: 100%;
  background-color: var(--color-purple-700);
  color: var(--color-grey-0);

  transition: all 550ms;

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 0;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

function UploadButtonDashboard({ style }) {
  const dispatch = useDispatch();
  const limits = useSelector((store) => store.limits);

  function handleCreateFile(file) {
    if (!file) return;
    const uploadedFile = {
      id: Date.now(),
      dateCreated: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      size: file.size,
      name: file.name,
      type: file.type.includes("image")
        ? "image"
        : file.type.includes("video")
        ? "video"
        : "file",
      isStarred: false,
      isArchived: false,
    };

    if (!limits[uploadedFile.type]) {
      dispatch(createFile(uploadedFile));
    } else {
      toast("❌ Limit of uploads is reached !");
    }
  }

  return (
    <Label style={style}>
      <input
        type="file"
        onChange={(e) => handleCreateFile(e.target.files[0])}
      />
      <HiMiniArrowUpOnSquareStack /> <p>Upload </p>
    </Label>
  );
}

export default UploadButtonDashboard;
