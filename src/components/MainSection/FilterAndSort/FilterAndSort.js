import React from 'react';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import './style.scss';

const FilterAndSort = () => {
  return (
    <div className="filterAndSortContainer">
      <Filter />
      <Sort />
    </div>
  );
};

export default FilterAndSort;
