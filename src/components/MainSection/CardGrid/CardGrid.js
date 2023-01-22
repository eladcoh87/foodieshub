import React from 'react';
import './CardGrid.scss';
import RecipeCard from './Card/RecipeCard';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const CardGrid = () => {
  const recipeListe = useSelector((state) => state.recpiesList);

  const renderCardList = recipeListe.map((recpie) => {
    if (!recpie) {
      return recpie;
    }

    return (
      <Grid key={recpie.uri} item>
        <RecipeCard
          name={recpie.label}
          imgThum={recpie.images.THUMBNAIL.url}
          id={recpie.uri}
        />
      </Grid>
    );
  });

  return (
    <div className="cardGridContainer">
      <Grid justifyContent="space-between" container spacing={3}>
        {renderCardList}
      </Grid>
    </div>
  );
};

export default CardGrid;
