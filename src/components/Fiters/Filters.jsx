import React from 'react';
import {
  FilterLabel,
  FiltersWrapper,
  Input,
  StyledOption,
} from './Filters.styled';

export const TeacherFilter = ({ filters, onFilterChange }) => {
  const handleLanguageChange = event => {
    onFilterChange({ ...filters, language: event.target.value });
  };

  const handleLevelChange = event => {
    onFilterChange({ ...filters, level: event.target.value });
  };

  const handlePriceChange = event => {
    onFilterChange({ ...filters, price: event.target.value });
  };

  return (
    <div>
      <FiltersWrapper>
        <FilterLabel>
          Language:
          <Input value={filters.language} onChange={handleLanguageChange}>
            <option value="">All</option>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Polish">Polish</option>
          </Input>
        </FilterLabel>
        <FilterLabel></FilterLabel>
        <FilterLabel>
          Level of Knowledge:
          <Input value={filters.level} onChange={handleLevelChange}>
            <StyledOption value="A2 Elementary">A2 Elementary</StyledOption>
            <StyledOption value="B1 Intermediate">B1 Intermediate</StyledOption>
            <StyledOption value="B2 Upper-Intermediate">
              B2 Upper-Intermediate
            </StyledOption>
            <StyledOption value="C1 Advanced">C1 Advanced</StyledOption>
            <StyledOption value="C2 Proficient">C2 Proficient</StyledOption>
          </Input>
        </FilterLabel>

        <FilterLabel>
          Max Price:
          <Input value={filters.price} onChange={handlePriceChange}>
            <option value="">No Limit</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </Input>
        </FilterLabel>
      </FiltersWrapper>
    </div>
  );
};
