import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './PreviousSearch.scss';
import PreviousSearchItem from './PreviousSearchItem/PreviousSearchItem';

const PreviousSearch = () => {
  const prevSearchList = useSelector((state) => state.lastSearch);

  const renderList = prevSearchList.map((search) =>
    search ? (
      <Grid key={search} item>
        <PreviousSearchItem searchKey={search} />{' '}
      </Grid>
    ) : null
  );

  return (
    <div className="PreviousSearchContainer">
      <h2>Previous Search</h2>

      <div className="GridContainer">
        <Grid container spacing={2}>
          {renderList}
        </Grid>
      </div>
    </div>
  );
};

export default PreviousSearch;
