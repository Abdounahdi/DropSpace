import { useSearchParams } from "react-router";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.6rem;
  padding: 1.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
  font-weight: 400;
  color: var(--color-grey-500);

  &:focus {
    outline: none;
  }
`;

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!searchParams.get("sortBy")) {
    searchParams.set("sortBy", options[0].value);
    setSearchParams(searchParams);
  }

  function handleSortBy(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSelect
      type="white"
      onChange={handleSortBy}
      value={searchParams.get("sortBy")}
    >
      {options.map((option) => (
        <option value={option.value} key={Math.random()}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default SortBy;
