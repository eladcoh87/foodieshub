import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { getRecipesApi } from '../../../apis/apis';
import {
  addToLastSearch,
  getRecipeAction,
  setOriginalRecipes,
} from '../../../store/actions';
import './InputSearch.scss';
import { useDispatch } from 'react-redux';

const InputSearch = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnClick = (event) => {
    dispatch(addToLastSearch(value));


    const recipeList = getRecipesApi(value);

    setValue('');

    recipeList
      .then((recipes) => {
        if (!recipes) {
          throw new Error('somtinhg went wrong!!');
        }

        const recipeList = recipes.map((recpieItem) => recpieItem.recipe);


        dispatch(getRecipeAction(recipeList));
        dispatch(setOriginalRecipes(recipeList));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="InputTextContainer">
      <TextField
        value={value}
        onChange={handleOnChange}
        id="outlined-basic"
        label="search recipe..."
        variant="outlined"
      />

      <Button
        onClick={handleOnClick}
        color="secondary"
        className="search-btn"
        size="small"
        variant="contained"
        endIcon={<SearchIcon />}
      ></Button>
    </div>
  );
};

export default InputSearch;
