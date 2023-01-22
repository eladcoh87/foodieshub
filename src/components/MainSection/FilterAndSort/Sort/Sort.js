import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipeAction } from '../../../../store/actions';
import './style.scss';

const Sort = () => {
  const recipeList = useSelector((state) => state.recpiesList);
  const dispatch = useDispatch();
  const [sortOptions, setSortOptions] = useState('');

  const handleChange = (event) => {

    setSortOptions(event.target.value);

    if (event.target.value === 'maxIngredint') {
      const sortList = recipeList.sort(
        (a, b) => b.ingredients.length - a.ingredients.length
      );

      const newSortList = [...sortList];

      dispatch(getRecipeAction(newSortList));
    }

    if (event.target.value === 'a-z') {
      const aToZRecipeList = recipeList.sort((a, b) => {
        const Astr = a.label.split(' ')[0].toLowerCase();
        const Bstr = b.label.split(' ')[0].toLowerCase();

        if (Astr < Bstr) {
          return -1;
        }

        if (Astr > Bstr) {
          return 1;
        }

        return 0;
      });

      const neWaToZRecipeList = [...aToZRecipeList];

      dispatch(getRecipeAction(neWaToZRecipeList));
    }
  };

  return (
    <div className="sortContainer">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select sort Option
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortOptions}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'maxIngredint'}>max ingredint</MenuItem>
          <MenuItem value={'a-z'}>A - z</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
