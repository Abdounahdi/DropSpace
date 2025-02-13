import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";

const ResultsContainer = styled.div`
  position: absolute;
  background-color: var(--color-grey-50);
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 102%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem 3rem 1.6rem 2rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-300);
  z-index: 99999;
`;

const FileRes = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  cursor: pointer;
  color: var(--color-grey-500);

   &:hover{
    color: var(--color-grey-900);
   }
`;

function File({name}) {
  return (
    <FileRes>
      <HiMagnifyingGlass />
      <p>{name}</p>
    </FileRes>
  );
}

function SearchResults({ files }) {
  if (!files.length) return;
  return (
    <ResultsContainer>
      {files.map((file) => (
        <File key={file.dateCreated} name={file.name}/>
      ))}
    </ResultsContainer>
  );
}

export default SearchResults;
