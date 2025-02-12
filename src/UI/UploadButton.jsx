import { Upload, message } from "antd";
import styled from "styled-components";
import { HiMiniArrowUpOnSquareStack } from "react-icons/hi2";
import { useEffect, useState } from "react";

const Label = styled.label`
  display: inline-block;
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

const props = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function UploadButton() {
  const [file, setFile] = useState();

  
  useEffect(
    function () {
      console.log(file);
    },
    [file]
  );
  return (
    // <Upload style={{ width: "100%" }} {...props}>
    <Label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <HiMiniArrowUpOnSquareStack /> <p>Upload </p>
    </Label>
    // </Upload>
    // <Upload style={{ width: "100%" }} {...props}>
    //   <Button onClick={handleUploadFile}>
    //     <HiMiniArrowUpOnSquareStack /> <p>Upload </p>
    //   </Button>
    // </Upload>
  );
}

export default UploadButton;
