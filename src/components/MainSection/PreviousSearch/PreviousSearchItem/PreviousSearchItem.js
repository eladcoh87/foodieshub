import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesApi } from '../../../../apis/apis';
import { getRecipeAction } from '../../../../store/actions';
import './PreviousSearchItem.scss';

const PreviousSearchItem = ({ searchKey }) => {
  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    const value = searchKey;

    const SearchParams = new URLSearchParams({ q: value, type: 'public' });
    const recipeList = getRecipesApi(SearchParams);

    recipeList
      .then((recipes) => {
        if (!recipes) {
          throw new Error('somtinhg went wrong!!');
        }

        const recipeList = recipes.map((recpieItem) => recpieItem.recipe);

        dispatch(getRecipeAction(recipeList));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="prevSearchContainer">
      <Button
        onClick={handleOnClick}
        color="secondary"
        className="prevSearchBtn"
        variant="contained"
      >
        {searchKey}
      </Button>
    </div>
  );
};

export default PreviousSearchItem;
